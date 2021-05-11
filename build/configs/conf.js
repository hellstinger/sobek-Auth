"use strict";

module.exports = {
  secret: '6efedf6fdb61b9f3b416202dfab2bf17',
  database: {
    local: {
      name: 'sobek_register',
      user: 'root',
      password: '',
      host: '127.0.0.1',
      port: 3306,
      dialect: 'mysql'
    },
    aws: {
      dev: {
        name: 'sobek_register',
        user: 'admin',
        password: 'S3d4f5g6',
        host: 'db-test-matriz01.c0jfktggyexf.us-east-2.rds.amazonaws.com',
        port: 3306,
        dialect: 'mysql'
      }
    }
  }
};