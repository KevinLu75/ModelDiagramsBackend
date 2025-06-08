const Proyectos = require("../models/proyectos");

const crearProyecto = async(req,res)=>{
    try{
        const {nombre, descripcion}= req.body;

        const nuevoProyecto = await Proyectos.create({nombre,descripcion});
        return res.status(201).json(nuevoProyecto);
    } catch(error){
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}

const getProyectos = async(req, res)=>{
    try{
        const proyectos = await Proyectos.findAll();
        return res.status(200).json(proyectos);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}

const updatedProyecto = async(req, res)=>{
    try{
        const {id_proyecto} = req.params;
        const {nombre, descripcion} = req.body;
        const updaproyecto = await Proyectos.findByPk(id_proyecto);
        updaproyecto.nombre = nombre;
        updaproyecto.descripcion=descripcion;
        updaproyecto.save();
        return res.status(200).json(updaproyecto);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}

const getNombreProyecto = async(req, res)=>{
    try{
        const {id_proyecto}=req.params;
        const proyectoParsed = parseInt(id_proyecto);
        const proyecto = await Proyectos.findByPk(proyectoParsed);
        return res.status(200).json(proyecto);
    }catch(error){
        console.log(error);
        return res.status(500).json({message:' Error obteniendo proyecto'});
    }
}
module.exports = {crearProyecto, getProyectos, updatedProyecto, getNombreProyecto};