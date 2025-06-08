
const Versiones = require("../models/versiones");

const crearVersion = async(req,res)=>{
    try{
        const {proyecto, diagrama, version, contenido} = req.body;
        const nuevaVersion = await Versiones.create({id_proyecto: proyecto, id_diagrama: diagrama, version: version, json:contenido})
        return res.status(200).json(nuevaVersion);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}

const updatedVersion = async(req,res)=>{
    try{
        const {version} = req.params;
        const versionInt = parseInt(version);
//        const diagramaInt = parseInt(diagrama);
        const {contenido} = req.body;
     //   console.log(contenido, proyectoInt, diagramaInt);
        const versionUpda = await Versiones.findByPk(versionInt);
        console.log("Proyecto", versionUpda);
        versionUpda.json = contenido;
        versionUpda.save();
        return res.status(200).json(versionUpda);

    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}

const getVersion = async(req,res)=>{
    try{
        const {proyecto, diagrama} = req.params;

        const proyectoParsed = parseInt(proyecto);
        const diagramaParsed = parseInt(diagrama);
        const versiones = await Versiones.findAll({
            where:{
                id_proyecto: proyectoParsed,
                id_diagrama: diagramaParsed
            }
        });
        return res.status(200).json(versiones);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}

const getSingleVersion = async(req, res)=>{
    try{
        const {version} = req.params;
        const versionParsed = parseInt(version);

        const versionFound = await Versiones.findByPk(versionParsed);
        return res.status(200).json(versionFound);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error obteniendo version'});
    }
}

const getAllVersiones = async(req, res)=>{
    try{
        const {proyecto} = req.params;

        const proyectoParsed = parseInt(proyecto);
        const versiones = await Versiones.findAll({
            attributes: ['id_proyecto', 'id_diagrama','id_version','version'],
            where:{
                id_proyecto: proyectoParsed
            }

        });
        return res.status(200).json(versiones);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}

const getJson = async(req, res)=>{
    try{

        const {version} = req.params;
        versionParsed = parseInt(version);
        console.log("version",version);
        const versionFind = await Versiones.findByPk(version,{
            attributes:['json']
        })
        return res.status(200).json(versionFind);

    }catch(error){
        console.log(error);
        return res.status(500).json({message:'No se pudo obtener el json'})
    }
}


module.exports = {crearVersion, updatedVersion, getVersion, getSingleVersion, getAllVersiones, getJson}