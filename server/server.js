const express = require('express');
const path = require('path');
const router = require("./routes/routes")



const app = express ();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/public', express.static(`${__dirname}/storage/imgs`))

require('./databases/mongo');
require('./databases/mysql');


app.get('/index', (req, res) => {
    res.send('Página de prueba index');

});

app.post('/registro', router);

app.use(require('./routes/routes'));

app.listen(5000, ()=> {
    console.log("Conectado al puerto 5000")
});

