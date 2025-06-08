const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

class Proyectos extends Model{}
Proyectos.init({
    id_proyecto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'proyectos',
    tableName: 'proyectos',
    timestamps: false
});
const versiones = require('../models/versiones.js');
const ProyectosCreados = require('./proyectos_creados.js');
Proyectos.hasMany(versiones, {foreignKey: 'id_proyecto', onDelete: 'SET NULL'})
versiones.belongsTo(Proyectos, {foreignKey: 'id_proyecto'});

Proyectos.hasMany(ProyectosCreados, {foreignKey: 'id_proyecto', onDelete: 'SET NULL'})
ProyectosCreados.belongsTo(ProyectosCreados,{foreignKey:'id_proyecto'});

module.exports = Proyectos;