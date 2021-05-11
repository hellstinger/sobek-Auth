import logger from '../../libs/logger'
import ApiError from './ApiError'

const log = logger('error.handle')

function apiErrorHandle  (err, req, res, next ){
     log.error(err)
     if(err instanceof  ApiError){
         log.info('instaceof')
         res.status(err.code).json(err.message)
         return
     }
    log.info('500')
    res.status(500).json('Error')

}

module.exports = apiErrorHandle