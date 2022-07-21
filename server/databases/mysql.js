const mysql = require('mysql');

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('webpersonal', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306, 
    define: {
        timestamps: false
    }
})

sequelize.authenticate()
    .then(() => {
        console.log('Conectado con MySQL')
    })
    .catch(err => {
        console.log('No conectado: '+ err)
    });

    module.exports = sequelize;