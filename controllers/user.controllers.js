const ctrlHome = {};
const User = require('../models/User');

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
    const users = await User.findAll() // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(users);
}

// Devuelve un solo usuario de la colección
ctrlHome.rutaGetUnico = async (req, res) => {
    const { id } = req.params;
    const users = await User.findByPk(id) // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(users);
}

// Controlador que almacena un nuevo usuario
ctrlHome.rutaPost = async (req, res) => {
    const { nombre, email } = req.body;
    const datos = await User.create({nombre, email})
    
    res.json({msg: 'El usuario se creo Correctamente', datos});
}




module.exports = ctrlHome;