import { User } from '../configs/databasa.config'
import * as helpers from '../libs/helpers'
import jwt from 'jsonwebtoken'
import config from '../configs/conf'
import logger from '../libs/logger'

const log = logger('auth.controller')

log.info('Init auth controller')

export const signIn = async (req, res) => {
    log.info('Init signIn')

    try {
            const { username, password } = req.body
            const usr = await User.findOne({ where: [{username: username}]})
            log.info('body: ',req.body)
            if(!usr){
                log.info('User not Found')
                res.status(404).json({message: 'User not Found'})
            }
            const validPassword = await helpers.machpwd(password, usr.password)
            log.info('valid: '+validPassword)
            if(validPassword){
                const token = jwt.sign({ id:usr.id_user }, config.secret, {expiresIn: 86400}) //24HRS
                log.info('token: '+token)
                res.status(200).json({ auth: true , token: token})
            }
            res.status(404).json({message: 'Invalid Password'})
     } catch (error) {
        log.error('Trycatch signIn - auth Controller '+error)
        res.status(401).json({message: 'Trycatch signIn - auth Controller',error})
     }
     
}

export const signUp = async (req, res) => {
    log.info('Init signUp')

    const { username, password, active } = req.body
    const usr = await Users.findOne({ where: [{username: username}]})
    if(usr){
        res.status(404).json({message:'Existing User'})
    }
    const pwd = await helpers.encryptpwd(password)
    const userNew = {
        username: username,
        password: pwd,
        active: active
    }
    console.log('userNew: ',userNew)
    const user = await Users.create(userNew)
    const token = jwt.sign({ id:user.id_user }, config.SECRET, {
        expiredIn: 86400 //24HRS
    })
    res.status(200).json(token)   
    
    //res.send('signup')
} 