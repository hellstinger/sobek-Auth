import { User } from '../configs/databasa.config'
import logger from '../libs/logger'
import * as helpers from '../libs/helpers'
import ApiError from '../middlewares/errors/ApiError'


const log = logger('user.controller')

log.info('Init user Controller')

export const getUsers = async (req, res, next) => {

    try {
        //Find all Users
        const users = await User.findAll()
        if(!users){
            next(ApiError.badRequest('Dont find users'))
            //res.status(401).json({message: 'Dont find users '})
        }

        res.status(200).json(users)
    }catch (e) {
         log.error({message:'TryCatch Error - find all user - Controller', e})
         next({})
    }
}

export const getUserbyId = async (req, res) => {

    try {
        console.log('id: ',req.params.id_user);
        //Find user by Id
        const user = await User.findOne( { where: { id_user: req.params.id_user } })
        if(!user){
            res.status(401).json({message: 'Problems to finding user'})
        }

        res.status(200).json(user.dataValues)
    } catch (error) {
        log.error({message:'TryCatch Error - find user by Id - Controller', error})
        res.status(401).json({message:'TryCatch Error - find user by Id - Controller', error})
    }
}

export const createUser = async (req, res) => {

    try {
            req.body.password =  req.body.password != null ? await helpers.encryptpwd(req.body.password) : res.status(401).json({message:''})
            const response = await User.create(req.body)
            if(response){
               res.status(200).json(response)
            }
            res.status(401).json({message:'Respuesta null', response})
    }catch (e) {
        log.error({message:'TryCatch Error - create user - Controller', e})
        res.status(401).json({message:'TryCatch Error - create user - Controller', e})
    }
}

export const updateUser = async (req, res) => {

    log.info('Init update user - Controller');
    log.info('params: ',req.params.id_user);
    try {

        const user = await User.findOne( { where: { id_user: req.params.id_user } })
        log.info('user: ',user)
        if(!user){
            res.status(401).json({message: 'Usuario no encontrado'})
        }
        const update = await User.update({ where: { id_user:req.params.id_user }})
        if(!update){
            res.status(304).json({message: 'Not modifed'})
        }
        res.status(204).json({})
    }catch (error) {
        log.error('Error Trycatch Update User: ', error)
        res.status(500)
        return res.send(error)
    }
}
export const deleteUser = async (req, res) => {

    log.info('Init delete user - Controller');
    log.info('params: ',req.params.id_user);
    try {
        const user = await User.destroy({ where: { id_user: req.params.id_user }})
        if(!user){
            res.status(404).json({messege: 'Not deleted'})
        }
        log.info('User: ',user)
        res.status(204).json({})
    }catch (error) {
        log.error('Error Trycatch Delete User: ', error)
        res.status(error.response.status)
        return res.send(error.message)
    }
}