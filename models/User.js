const { DataTypes } = require("sequelize")
const db = require("../db/connection")

const User =  db.define("Usuarios",{
    nombre_persona:{
        type:DataTypes.STRING,
    },
    apellido_persona:{
        type:DataTypes.STRING,
    },
    dni_persona:{
        type:DataTypes.STRING,
    },
    fecha_nac_persona:{
        type:DataTypes.STRING,
    },
    telefono_persona:{
        type:DataTypes.STRING,
    },
    username_usuario:{
        type:DataTypes.STRING,
    },
    password_usuario:{
        type:DataTypes.STRING,
    },
    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    },
})



module.exports = User