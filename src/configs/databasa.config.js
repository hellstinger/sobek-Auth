
import Sequelize from 'sequelize'
import UserModel from '../models/schemas/user.model'
import RoleModel from '../models/schemas/role.model'
import UserDetailsModel from '../models/schemas/user.details.model'
import config from '../configs/conf'

const sequelize = new Sequelize(config.database.aws.dev.name,
                                config.database.aws.dev.user,
                                config.database.aws.dev.password,
    {
       host: config.database.aws.dev.host,
       dialect: config.database.aws.dev.dialect })

const User = UserModel(sequelize ,Sequelize)
const UserDetails = UserDetailsModel(sequelize ,Sequelize)
const Role = RoleModel(sequelize ,Sequelize)

sequelize.sync({ force: false }).then(() => {
    console.log('Tablas Sincronizadas.')
});

module.exports = {
    User,
    UserDetails,
    Role

};


