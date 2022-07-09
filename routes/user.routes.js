const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaGetUnico
 } = require('../controllers/user.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/api/get-user', rutaGet)

router.get('/api/get-user/:id', rutaGetUnico)

router.post('/api/post-user', rutaPost)

module.exports = router;
