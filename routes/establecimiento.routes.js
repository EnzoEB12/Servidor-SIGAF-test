const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaGetUnico
 } = require('../controllers/establecimiento.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/api/get-establecimiento', rutaGet)

router.get('/api/get-establecimiento/:id', rutaGetUnico)

router.post('/api/post-establecimiento', rutaPost)

module.exports = router;
