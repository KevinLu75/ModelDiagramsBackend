var express = require('express');
const { request } = require('../app');
var router = express.Router();

const { crearProyecto, getProyectos, updatedProyecto, getNombreProyecto } = require('../controllers/proyectos');
const { crearDiagrama, getDiagramas, updateDiagrama } = require('../controllers/diagrama');
const { crearVersion, getVersion, updatedVersion, getSingleVersion, getAllVersiones, getJson } = require('../controllers/versiones');
const { postProyectoCreado } = require('../controllers/proyectosCreados');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Proyectos
router.post('/crearproyecto', crearProyecto);
router.get('/proyectos', getProyectos);
router.get('/proyecto/nombre/:id_proyecto',getNombreProyecto);
router.put('/proyecto/:id_proyecto', updatedProyecto);


//Diagramas
router.post('/creardiagrama', crearDiagrama);
router.get('/diagramas', getDiagramas);
router.put('/diagrama/:diagrama', updateDiagrama);

//Versiones
router.post('/crearversion', crearVersion);
router.get('/version/:version', getSingleVersion);
router.get('/versiones/:proyecto',getAllVersiones);
router.get('/versiones/:proyecto/:diagrama', getVersion);
router.get('/contenido/:version',getJson);

router.put('/version/:version', updatedVersion);

router.post('/crear/proyecto/bp',postProyectoCreado);

module.exports = router;
