
const Sequelize = require('sequelize');
const sequelize = require('../databases/mysql');


//Defino cómo se construye la bd de Usuarios

const Usuario = sequelize.define('Usuarios', {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    apellidos: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nick: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    pass: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
   
});


module.exports = Usuario;