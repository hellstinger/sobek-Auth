import { Router } from 'express'
import  * as userCtrl from '../controllers/user.controller'
import logger from '../libs/logger'
import  valRequest from '../validates/user.validate'

const log = logger('user.routes')


log.info('Init user routes')
const router = Router()



router.route('/v1/api/backend/user')
    .post(userCtrl.createUser)
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser)
    .all(userCtrl.getUsers)

router.route('/v1/api/backend/user/:id_user')
    .get(valRequest.valReqDeleteUserId,userCtrl.getUserbyId)


export default router