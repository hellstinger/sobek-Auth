"use strict";

module.exports = function (sequelize, type) {
  return sequelize.define('user.details', {
    id_user_details: {
      primaryKey: true,
      type: type.INTEGER,
      autoIncrement: true
    },
    name: {
      type: type.STRING,
      allowNull: false
    },
    first_name: {
      type: type.STRING,
      allowNull: false
    },
    last_name: {
      type: type.STRING,
      allowNull: false
    },
    address: {
      type: type.STRING,
      allowNull: false
    },
    tel1: {
      type: type.STRING,
      allowNull: false
    },
    tel2: {
      type: type.STRING,
      allowNull: true
    }
  }, {
    tableName: 'user_details',
    underscored: false,
    timestamps: false
  });
};