const router = require ('express').Router();
const Empleado = require('../models/empleados');
const moment = require('moment');

// All

router.get ('/', async (req, res) => {
    try {
        const rows = await Empleado.getAll();
        res.render ('empleados/index', {empleados:rows})
    } catch {
        res.render (err);
    }
})

// New 

router.get('/new', (req, res) => {
    res.render ('empleados/formNew');
 });


router.post('/create', async (req, res) => {
    try {
        const result = await Empleado.addEmpleado(req.body);
        res.redirect('/empleados');
    } catch (err) {
        res.send(err);
    }
});

// Edit - Update

router.get('/edit/:idEmpleado', async (req, res) => {
    try {
        const empleado = await Empleado.getById(req.params.idEmpleado);
        empleado.fecha_nacimiento = moment(empleado.fecha_nacimiento).format('YYYY-MM-DD');
        res.render('empleados/formEdit', { empleado });
    } catch (err) {
        res.send(err);
    }
});

router.post('/update', async (req, res) => {
    try {
        const result = await Empleado.updateById(req.body.idEmpleado, req.body);
        res.redirect('/empleados');
    } catch (err) {
        res.send(err);
    }
});

// Delete by id 

router.get('/delete/:idEmpleado', (req, res) => {
    Empleado.deleteById(req.params.idEmpleado)
        .then(result => {
            res.redirect('/empleados');
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;