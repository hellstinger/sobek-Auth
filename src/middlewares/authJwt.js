import jwt from 'jsonwebtoken'
import { User } from '../configs/databasa.config'
import config from '../configs/conf'

export const verifyToken = async (req, res, next) => {
    try {
        console.log('header: ', req.headers)
        const token = req.headers["x-access-token"]
        console.log('token: ', token)
        if(!token) return res.status(403).json({message: "No Token provided"})
        
        //Decoded Token
        const decoded = jwt.verify(token, config.secret)
        console.log('decoded: ',decoded)
        req.userId = decoded.id
        const user = await User.findOne({where: {id_user: req.userId}})
        if(!user) return res.status(404).json({message: "No User found"})
        next()
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"})
    }
}

export const isModerator = async(req, res, next) =>{
    
}

export const isAdministrator = async(req, res, next) =>{
        
}