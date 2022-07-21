
 const mongoose = require('mongoose')
 const connection = 'mongodb://localhost:27017/Proyecto_personal'
 mongoose
 .connect(connection)
 .then(() => {
   console.log('Conexión con MongoDB establecida');
 })
 .catch((err) => {
   console.error(err);
 });
