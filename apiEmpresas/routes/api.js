const router = require ('express').Router();
const apiDepartamentosRouter = require('./api/departamentos');
const apiEmpleadosRouter = require ('./api/empleados');

// Compruebo que se conecta la ruta
/* router.get('/', (req,res) => {
    res.send ('Estoy en /api')
}) */


router.use ('/departamentos', apiDepartamentosRouter);
router.use ('/empleados', apiEmpleadosRouter);

module.exports = router;