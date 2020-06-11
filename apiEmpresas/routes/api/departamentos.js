const router = require ('express').Router();
const Departamento = require('../../models/departamentos');
 
 //GET http://localhost:3000/api/departamentos (no hace falta poner nada tras / porque heredo /api/clientes de api.js). Me devuelve los departamentos de la bd en formato JSON

 router.get('/', (req, res) => {
    Departamento.getAll()
    .then((rows) => {
        res.json(rows);
        // Sustituir por res.render ('clientes/index', {departamento:rows});
    })
    .catch(err => {
        res.json({error: err.message});
    })
});

 //POST http://localhost:3000/api/departamentos/ Crea un nuevo departamento en la base de datos

 router.post('/', async (req, res) => {
    const result = await Departamento.addDepartment(req.body);
    if (result['affectedRows'] === 1) {
        res.json({ success: 'Departamento agregado' });
    } else {
        res.json({ error: 'Error al agregar departamento' });
    }
});
 
 //DELETE http://localhost:3000/api/departamentos/idDepartamento Borro un departamento

 router.delete('/:idDepartamento', async (req,res) => {
    const result = await Departamento.deleteById(req.params.idDepartamento);
    if (result ['affectedRows'] === 1) {
        res.json({ success: 'Se ha borrado el departamento'});
    } else {
        res.json ({error: 'No se ha borrado'})
    }
})
 
 //PUT http://localhost:3000/api/departamentos/idDepartamento Edita los datos de un departamento

router.put ('/:idDepartamento', async (req,res) => {
    const result = await Departamento.updateById(req.params.idDepartamento, req.body);
    if (result ['affectedRows'] === 1) {
        res.json({chachi: 'Se ha actualizado el departamento'});
    } else {
        res.json ({error: 'No se ha actualizado'})
    }
})
 
 module.exports=router;