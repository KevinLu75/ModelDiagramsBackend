var express = require('express');
var router = express.Router();
var projectService = require('../services/projectService');

router.post('/crear', async (req, res) => {
    const {nombreProyecto, graphModel, credenciales, paquetesGraph} = req.body;
    console.log("Nombre de Proyecto",nombreProyecto);
    console.log("GraphModel", graphModel);
    console.log("credenciales", credenciales);
    console.log("paquetes graph",paquetesGraph);
    if (!nombreProyecto, !graphModel) {
        res.status(400).json({error: 'El nombre del proyecto es requerido y/o el modelo de grafos es requerido'});
    }
    try{
        await projectService.createProject(nombreProyecto, graphModel, credenciales, paquetesGraph);
        res.json({message: 'Proyecto creado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
    });
module.exports = router;