
const Comment = require('../models/comentarios');

const Comments = {

    getComment: async (req, res, next) => {
        try {
            const comentarios = await Comment.find();
            return res.status(200).json({
                succes: true,
                count: comentarios.length,
                data: comentarios,
            });
        } catch (error){
            console.log(error);
            res.status(500), json({ error: 'Error en el servidor'});
        }
    },

    setComment: async (req, res, next) => {
        try {
            const comentarios= await Comment.create(req.body);
            return res.status(200).json({
                succes: true,
                data: comentarios,
            });
        } catch (error){
            console.log(error);
            if(error.code === 11000) {
                return res.status(400),json({ error: 'Este comentario ya existe'});
            }
            res.status(500).json({ error: 'Error en el servidor'});
        }
    },


    searchComment: (req, res, next) => {
        const title = req.body.title;
        const date = req.body.date;
        
        if (title != null){
            Comment.find({ title: title}, function (err, result){
                console.log(result);
                res.json(result)
            })
        } if (date != null){
            Comment.find({ date: date}, function (err, result){
                console.log(result);
                res.json(result)
            })
        }
    }

}  

module.exports = Comments;