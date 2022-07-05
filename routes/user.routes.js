const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaPut, rutaDelete, deleteUser, rutaGetUnico
 } = require('../controllers/user.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/api/get-user', rutaGet)

router.get('/api/get-user/:id', rutaGetUnico)

router.post('/api/post-user', rutaPost)

// Actualizar usuarios
router.put('/', rutaPut)

router.put('/deleteuser', deleteUser)

router.delete('/', rutaDelete)

module.exports = router;
