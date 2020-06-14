const router = require ('express').Router();
const apiDepartamentosRouter = require('./api/departamentos');
const apiEmpleadosRouter = require ('./api/empleados');

// Connect
/* router.get('/', (req,res) => {
    res.send ('Route /api works')
}) */


router.use ('/departamentos', apiDepartamentosRouter);
router.use ('/empleados', apiEmpleadosRouter);

module.exports = router;