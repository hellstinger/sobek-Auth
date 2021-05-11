import {Role, UserDetails} from '../configs/databasa.config'
import logger from '../libs/logger'


const log = logger('user.details.controller')

log.info('Init User Details Controller')

export const getAllUserDetails = async (req, res, next) => {
    log.info('Get all user details')
    try {
        //Find all Users

        const userdetails = await UserDetails.findAll()
        if(!userdetails || userdetails === null ){
            log.info('Dont Find any user details - Controller')
            res.status(501).json({message: 'No se encontraron user details'})
        }
        res.status(200).json(userdetails)
    }catch (e) {
      next(e)
    }
}

export const getUserbyId = async (req, res) => {
    log.info('Get user details by id - Controller')
    try {
        console.log('id: ',req.params.id_userdetails);
        //Find user by Id
        const user = await UserDetails.findOne( { where: { id_user_details: req.params.id_userdetails } })
        if(!user){
            res.status(401).json({message: 'Problems to finding user'})
        }

        res.status(200).json(user.dataValues)
    } catch (error) {
        log.error({message: 'TryCatch Error - get User Details by id Controller', error})
        res.status(401).json({message: 'TryCatch Error - get User Details by id Controller', error})
    }
}

export const createUser = async (req, res, next) => {
    log.info('Create user details - Controller')
    try {
        const response = await UserDetails.create(req.body)
        if(response){
            res.status(201).json(response)
        }
        res.status(401).json({message:'problemas al crear user details', response})
    }catch (e) {
        next(e)
    }
}

export const updateUser = async (req, res) => {
    log.info('Update user details - Controller')
    try {
        log.info('id_userdetails: ', req.params.id_userdetails)
        const user = await UserDetails.findOne( { where: { id_user_details: req.params.id_userdetails } })
        if(!user){
            log.alert('user details null', user)
            res.status(401).json({message: 'user details null'})
        }
        const usrUpdate = await UserDetails.update(req.body, { where: { id_user_details: req.params.id_userdetails }})
        if(!usrUpdate){
            log.alert('user details not update', usrUpdate)
            res.status(401).json({message: 'user details not update - Controller'})
        }

        res.status(204).json({})
    }catch (e) {
        log.error('Trycatch update user details',e)
        res.status(500).json({message: 'Trycatch update user details',e})
    }


}

export const deleteUser = async (req, res) => {


    log.info('Init Delete user details by Id - sequelize models')
    log.info('id: ',req.params.id_userdetails);
    try {
        const user = await UserDetails.destroy({where: { id_user_details: req.params.id_userdetails }});
        log.info('UserDetails: ',user);
        res.status(204).json({});
    }catch (e) {
        log.error('TryCatch Error - Delete role by id: ',e)
        res.status(500).json({message:'Error al eliminar role por id', e})
    }
}