import { Router } from 'express'
import * as roleCtrl from '../controllers/role.controller'
import logger from '../libs/logger'
import { verifyToken } from '../middlewares'

const log = logger('role.routes')

log.info('Init routes role')
const router = Router()

router.post('/', roleCtrl.createRole)

router.get('/', roleCtrl.getAllRoles)

router.get('/:id_role',roleCtrl.getRolebyId)

router.patch('/:id_role', roleCtrl.updateRole)

router.delete('/:id_role', roleCtrl.deleteRole)

export default router