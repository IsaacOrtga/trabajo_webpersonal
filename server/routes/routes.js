const express = require('express');
const router = express.Router();




// const passRecovery = require("../controllers/recuperacion.controller");
const usuarios = require('../controllers/authController')
const lugares = require('../controllers/lugares.controller')
const comments = require('../controllers/comments.controller')

router.post('/', );
router.post('/login', usuarios.Login);
router.get('/resultados');
router.get('/eventos');
// router.get('/lugares', lugares.getLugar);
router.get('/lugares', lugares.searchLugar);
router.post('/registro', usuarios.registroDatos);
router.post('/comments', comments.setComment);
router.get('/historial');
// router.post('/comments', comentarios.comment);

// router.post("/recovery", passRecovery.confirmedUser);
// router.get("/recovery/:email/:token", passRecovery.confirmUserGet);
// router.post("/recovery/:email/:token", passRecovery.checkUserPost);


module.exports = router;