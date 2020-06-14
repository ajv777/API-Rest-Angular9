const router = require ('express').Router();
const Departamento = require('../models/departamentos');

// All 
router.get ('/', async (req, res) => {
    try {
        const rows = await Departamento.getAll();
        res.render ('departamentos/index', {departamentos:rows})
    } catch {
        res.render (err);
    }
  /*   res.send ('Route /departamentos works') */
})

// Create new 

router.get('/new', (req, res) => {
    res.render ('departamentos/formNew');
 });


router.post('/create', async (req, res) => {
    try {
        const result = await Departamento.create(req.body);
        res.redirect('/departamentos');
    } catch (err) {
        res.send(err);
    }
});

// Edit - Update 
router.get('/edit/:idDepartamento', async (req, res) => {
    try {
        const departamento = await Departamento.getById(req.params.idDepartamento);
        res.render('departamentos/formEdit', { departamento });
    } catch (err) {
        res.send(err);
    }
});

router.post('/update', async (req, res) => {
    try {
        const result = await Departamento.updateById(req.body.idDepartamento, req.body);
        res.redirect('/departamentos');
    } catch (err) {
        res.send(err);
    }
});

// Delete by id 

router.get('/delete/:idDepartamento', (req, res) => {
    Departamento.deleteById(req.params.idDepartamento)
        .then(result => {
            res.redirect('/departamentos');
        })
        .catch(err => {
            res.send(err);
        });
});


module.exports = router;