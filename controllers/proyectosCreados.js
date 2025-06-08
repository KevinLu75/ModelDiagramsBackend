const ProyectosCreados = require("../models/proyectos_creados");
const postProyectoCreado = async(req, res)=>{
    try {
        
        const {proyecto, secuencias,clases, cu, paquetes,componentes, bdd_host, bdd_user, bdd_contra} = req.body;
        console.log(proyecto, secuencias, clases, cu, paquetes, componentes);
        const nuevoProyecto = await ProyectosCreados.create({id_proyecto:proyecto, dia_secuencias:secuencias, dia_componentes:componentes,dia_cu: cu,dia_paquetes:paquetes,dia_clases:clases, bdd_host, bdd_user, bdd_contra});
        return res.status(200).json(nuevoProyecto);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:' Error creando proyecto'});
    }
}


module.exports = {postProyectoCreado}