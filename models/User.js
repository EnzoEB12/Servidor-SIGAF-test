const { DataTypes } = require("sequelize")
const db = require("../db/connection")

const User =  db.define("Usuarios",{
    nombre:{
        type:DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
    },
    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    },
})



module.exports = User