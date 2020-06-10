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

 //POST http://localhost:3000/api/departamentos/ Crea un nuevo enmpleado en la base de datos

router.post('/', (req,res) => {
    res.send ('Estoy en /api/departamentos')
}) 
 
 //DELETE http://localhost:3000/api/departamentos/IDDEPARTAMENTO Borro un empleado
 
 //PUT http://localhost:3000/api/departamentos/IDDEPARTAMENTO Edita los datos de un cliente
 
 module.exports=router;