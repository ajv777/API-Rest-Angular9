const router = require ('express').Router();
const Empleado = require('../../models/empleados');
const { check, validationResult } = require('express-validator');
 
 //GET http://localhost:3000/api/empleados (no hace falta poner nada tras / porque heredo /api/clientes de api.js). Me devuelve los empleados de la bd en formato JSON

router.get('/', (req, res) => {
    Empleado.getAll()
    .then((rows) => {
        res.json(rows);
    })
    .catch(err => {
        res.json({error: err.message});
    })
});
 
 //POST http://localhost:3000/api/empleados/ Crea un nuevo empleado en la base de datos

 router.post('/',  [
     check('nombre', 'El campo nombre es obligatorio').exists(),
     check('dni', 'El campo dni es obligatorio y ha de tener un formato válido').exists().isLength({ min: 9 }),
     check('sexo', 'El campo sexo es obligatorio').exists(),
     check('fecha_nacimiento', 'La fecha de nacimiento es obligatoria').exists(),
     check('salario', 'El campo salario es obligatorio').exists(),
     check('cargo', 'El campo cargo es obligatorio').exists(),
     check('fk_departamento', 'El departamento es obligatorio').exists(),
    ], async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.json(errores.array());
    }
    const result = await Empleado.addEmpleado(req.body);
    if (result['affectedRows'] === 1) {
        const empleado = await Empleado.getById(result['insertId']);
        res.json({ success: 'Empleado insertado correctamente', empleado});
    } else {
        res.json({ error: 'No se ha insertado el empleado' });
    }
});
 
 //DELETE http://localhost:3000/api/empleados/idEmpleado Borro un empleado

 router.delete('/:idEmpleado', async (req,res) => {
    const result = await Empleado.deleteById(req.params.idEmpleado);
    if (result ['affectedRows'] === 1) {
        res.json({ success: 'Se ha borrado el empleado'});
    } else {
        res.json ({error: 'No se ha borrado'})
    }
})
 
 //PUT http://localhost:3000/api/empleados/idEmpleado Edita los datos de un empleado

 router.put ('/:idEmpleado', async (req,res) => {
    const result = await Empleado.updateById(req.params.idEmpleado, req.body);
    if (result ['affectedRows'] === 1) {
        res.json({chachi: 'Se ha actualizado el empleado'});
    } else {
        res.json ({error: 'No se ha actualizado'})
    }
}) 

 module.exports=router;