 const mongoose = require ('mongoose');
 const { appConfig } = require('../config')

 const lugaresSchema = new mongoose.Schema(
    {
     nombre: String,
     actividad: String,
     caracteristicas: String,
     direccion: String,
     horario: String,
     contacto: String,
     imagenUrl: String,
 });

    lugaresSchema.methods.setImgUrl = function setImgUrl (filename) {
    const { host, port } = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
 }
 const Lugares = new mongoose.model('Lugares', lugaresSchema);
 module.exports = Lugares;