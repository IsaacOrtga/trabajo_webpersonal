
const { connection } = require('sequelize');
const Usuario = require('../models/usuarios');
const { encrypt } = require('../helpers/handleBcrypt');
const bcrypt = require('bcryptjs');
const { compare } = require('bcryptjs');


const usuarios = {
    registroDatos: async (req, res, next) => {
        const {
            nombre,
            apellidos,
            nick,
            email,
            pass,
            pass2,
        } = req.body;
        const passwordHash = await encrypt(pass);

        var pass2Ok = pass2 === pass;



        if (pass2Ok) {
            const usuario = await Usuario.create({
                nombre: nombre,
                apellidos: apellidos,
                nick: nick,
                email: email,
                pass: passwordHash,

            });
            res.send(usuario);


        }
    },

    Login: async (req, res, next) => {
        var nickLog = req.body.nickLog;
        var passLog = req.body.passLog;

        // console.log(req.body);

        const user = await Usuario.findOne({
            where: { nick: nickLog },
        });



        if (!user) {
            res.json({status: false})
        } else {
            const passwordOk = await bcrypt.compare(passLog, user.pass)

                if (passwordOk) {
                    next();
                    // res.send('Usuario correcto');
                    res.json({status: true, message: 'Usuario correcto'})
           
                } else {
                    next();
                    // res.send('Contraseña incorrecta');
                    res.json({status: false})
                }


            

            
        }
    }


};
module.exports = usuarios;



