import app from './configs/app'
import logger from '../src/libs/logger'

const log = logger('index')


app.listen(9091)

log.info('Server listen on port: ',9091)