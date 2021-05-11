import { Role } from '../configs/databasa.config'
import logger from '../libs/logger'
import {error} from "winston";

const log = logger('role.controller')


log.info('Init role Controller')
export const getAllRoles = async (req, res) => {

    log.info('Init get roles by - sequelize models')
    try {
        const role = await Role.findAll()
        res.status(200).json(role)
    }catch (e) {
        log.error('TryCatch Error - get all roles: ',e)
        res.status(500).json({message:'Error al buscar todos los roles', e})
    }

}

export const getRolebyId = async (req, res) => {
    log.info('Init get roles by ID - sequelize models')
    log.info('id role: ',req.params.id_role)
    try {
        const role = await Role.findOne( { where: { id_role: req.params.id_role } })
        console.log('role: ', role)
        res.status(200).json(role)
    }catch (e) {
        log.error('TryCatch Error - get role by id: ',e)
        res.status(500).json({message:'Error al buscar role por id', e})
    }

}

export const createRole = async (req, res) => {
    log.info('Init create role - sequelize models')
    const { name, description }  = req.body

    const newRole = {
        name: name,
        description: description
    }
    log.info('newRole: ',newRole)
    try {
        const role = await Role.create(newRole)
        log.info('role: ',role)
        res.status(200).json(role)
    }catch (e) {
        log.error('TryCatch Error - create roles: ',e)
        res.status(500).json({message:'Error al crear un role', e})
    }
}

export const updateRole = async (req, res) => {
    log.info('Init Update role by Id - sequelize models')
    log.info('id: ',req.params.id_role);
    log.info('body: ',req.body);

    try {
        const role = await Role.findOne({ where: { id_role: req.params.id_role}})
        if(!role){
            res.status(405).json({message:'Role not find - Role - Controller'})
        }
        const update = await Role.update(req.body, { where: { id_role: req.params.id_role}})
        if(!update){
            res.status(405).json({message:'Role null - Role - Controller'})
        }
        res.status(200).json({message:update})
    }catch (e) {
        log.error({error: e})
        res.status(e.statusCode).json({message:'TryCatch - Role - Controller', error: e})
    }

}

export const deleteRole = async (req, res) => {
    log.info('Init Delete role by Id - sequelize models')
    log.info('id: ',req.params.id_role);
    try {
        const role = await Role.destroy({ where: { id_role: req.params.id_role }})
        if(!role){
            res.status(405).json({message:'Role null - Role - Controller'})
        }
        log.info('role: ',role)
        res.status(200).json(role)
    }catch (e) {
        log.error('TryCatch Error - Delete role by id: ',e)
        res.status(500).json({message:'Error al eliminar role por id', e})
    }
}