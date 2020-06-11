const router = require ('express').Router();
const Empleado = require('../../models/empleados');
const empleados = require('../../models/empleados');
 
 //GET http://localhost:3000/api/empleados (no hace falta poner nada tras / porque heredo /api/clientes de api.js). Me devuelve los empleados de la bd en formato JSON

router.get('/', (req, res) => {
    Empleado.getAll()
    .then((rows) => {
        res.json(rows);
        // Sustituir por res.render ('clientes/index', {clientes:rows});
    })
    .catch(err => {
        res.json({error: err.message});
    })
});
 
 //POST http://localhost:3000/api/empleados/ Crea un nuevo enmpleado en la base de datos

 router.post('/', async (req, res) => {
    const result = await Empleado.addEmpleado(req.body);
    console.log(req.body)
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Empleado agregado' });
    } else {
        res.json({ error: 'Error al agregar empleado' });
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
    const result = await empleados.updateById(req.params.idEmpleado, req.body);
    if (result ['affectedRows'] === 1) {
        res.json({chachi: 'Se ha actualizado el empleado'});
    } else {
        res.json ({error: 'No se ha actualizado'})
    }
})

 
 module.exports=router;