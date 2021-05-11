import express from 'express'
import morgan from 'morgan'
import logger from '../libs/logger'
import { isCelebrateError } from 'celebrate';

import pkg from '../../package.json'
import userRouter from '../routes/user.routes'
import roleRouter from '../routes/role.routes'
import authRouter from '../routes/auth.routes'
import userDetailsRouter from '../routes/user.details.routes'

import errorHandle from '../middlewares/errors/error.handle'
import SequelizeErrorController from '../models/SequelizeErrorController'


const app = express()
const log = logger('app')

log.info('Init App')
//Set global
app.set('pkg', pkg)

//ADD Middlewares to Server
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded())

//ADD Routes
app.get('/', (req, res) =>{
    res.json({
        autor: app.get('pkg').author,
        descripcion: app.get('pkg').description,
        version: app.get('pkg').version
    })
    console.log(app.get('pkg'))
});
app.use(userRouter)
app.use('/v1/api/backend/userdetails', userDetailsRouter)
app.use('/v1/api/backend/role', roleRouter)
app.use('/v1/api/backend/auth', authRouter)
//app.use(errorHandle)
app.use((req,res,next)=>{

})
export default app