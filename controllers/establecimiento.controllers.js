const ctrlHome = {};
const Establecimiento = require('../models/Establecimiento');

// Devuelve todos los Establecimiento de la colección
ctrlHome.rutaGet = async (req, res) => {
    const users = await Establecimiento.findAll() // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(users);
}

// Devuelve un solo Establecimiento de la colección
ctrlHome.rutaGetUnico = async (req, res) => {
    const { id } = req.params;
    const users = await Establecimiento.findByPk(id) // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(users);
}

// Controlador que almacena un nuevo Establecimiento
ctrlHome.rutaPost = async (req, res) => {
    const { nombre, email } = req.body;
    const datos = await Establecimiento.create({nombre, email})
    
    res.json({msg: 'El Establecimiento se creo Correctamente', datos});
}




module.exports = ctrlHome;