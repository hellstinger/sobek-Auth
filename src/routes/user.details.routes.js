import { Router } from 'express'
import  * as userDetCtrl from '../controllers/user.details.controller'
import logger from '../libs/logger'
//import * as auth from '../middlewares/authJwt'
const log = logger('user.details.routes')

log.info('Init user details routes')
const router = Router()

router.post('/', userDetCtrl.createUser)

router.get('/', userDetCtrl.getAllUserDetails)

router.get('/:id_userdetails',userDetCtrl.getUserbyId)

router.patch('/:id_userdetails', userDetCtrl.updateUser)

router.delete('/:id_userdetails', userDetCtrl.deleteUser)

export default router