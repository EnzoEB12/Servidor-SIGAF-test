const { DataTypes } = require("sequelize")
const db = require("../db/connection")

const Establecimiento =  db.define("Establecimiento",{
    descripcion_establecimiento:{
        type:DataTypes.STRING,
    },
    georeferencia:{
        type:DataTypes.STRING,
    },
    superficie:{
        type:DataTypes.STRING,
    },
    activo:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
    },
})

module.exports = Establecimiento