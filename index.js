const express = require('express');
const db = require('./db/connection');
require('dotenv').config();


const app = express();

(async()=>{
    try {
        await db.authenticate()
        await db.sync()
        console.log("Conectado a la Base de Datos")
    } catch (error) {
        throw new Error(error)
    }
})()

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setttings
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes/user.routes'));
app.use(require('./routes/establecimiento.routes'));
 
app.listen(app.get('port'), ()=> console.log(`Server en linea en el puerto: ${app.get('port')}`))