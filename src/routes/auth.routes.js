import { Router } from 'express'
import * as authCtrl from '../controllers/auth.controller' 
const router = Router()

router.post('/signin', authCtrl.signIn)

router.post('/signup', authCtrl.signUp)

router.get('/logout', (req, res) => {
    res.status(200).send({ auth: false, token: null });
})


export default router