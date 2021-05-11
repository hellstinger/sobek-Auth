module.exports = (sequelize, type) => {
    return sequelize.define('role', {
        id_role: {
            primaryKey: true,
            type: type.INTEGER,
            autoIncrement: true,
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        description: {
            type: type.STRING,
            allowNull: false
        },
    },{
        tableName: 'role',
        underscored: false,
        timestamps: false
    });
};
