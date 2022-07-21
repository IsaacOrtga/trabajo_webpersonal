const Lugar = require('../models/lugares')

const lugar = {

   getLugar: async (req, res, next) => {
      try {
         const lugares = await Lugar.find();
         return res.status(200).json({
            success: true,
            count: lugares.length,
            data: lugares,
         });
      } catch (error) {
         console.log(error);
         res.status(500), json({ error: 'Error en el servidor' });
      }
   },

   setLugar: async (req, res, next) => {
      try {
         const lugar = await Lugar.create(req.body);
         return res.status(200).json({
            success: true,
            data: lugar,
         });
      } catch (error) {
         console.log(error);
         if (error.code === 11000) {
            return res.status(400).json({ error: 'Este lugar ya existe' });
         }
         res.status(500).json({ error: 'Error en el servidor' });
      }
   },

   searchLugar: (req, res, next) => {
      const nombre = req.body.nombre;
      const actividad = req.body.actividad;
      const caracteristicas = req.body.caracteristicas;
      console.log(req.body)
      if (nombre != null) {
         Lugar.find({ nombre: nombre }, function (err, result) {
       
            console.log(result);
            res.json(result)

         })





      }else if(actividad != null){
        Lugar.find({actividad: { "$all": [actividad]}}, function (err, result) {
         
           console.log(result);
           res.json(result)
        })
      }else if(caracteristicas != null){
        Lugar.find({caracteristicas: { "$all": [caracteristicas]}}, function (err, result) {
           console.log(result); 
           res.json(result) 
        })
     }else if(!req.body){
        return res.status(400).json({
           status_code: 0,
           error_msg: "Require Params Missing",
         });







      }

   }

}


module.exports = lugar;