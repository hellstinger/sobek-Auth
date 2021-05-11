"use strict";

module.exports = function (sequelize, type) {
  return sequelize.define('user', {
    id_user: {
      primaryKey: true,
      type: type.INTEGER,
      autoIncrement: true
    },
    username: {
      type: type.STRING,
      allowNull: false
    },
    password: {
      type: type.STRING,
      allowNull: false
    },
    id_role: {
      type: type.INTEGER,
      allowNull: false
    },
    id_user_details: {
      type: type.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'user',
    underscored: false,
    timestamps: false
  });
};