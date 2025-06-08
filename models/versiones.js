const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database.js');
const ProyectosCreados = require('./proyectos_creados.js');

class Versiones extends Model{}
Versiones.init({
    id_version: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    version:{
        type: DataTypes.STRING,
        allowNull: false
    },
    json:{
        type: DataTypes.JSON,
        allowNull: false
    }
    
},{
    sequelize,
    modelName: 'versiones',
    tableName: 'versiones',
    timestamps: false
});

/*Versiones.associate = function(models) {
    // A Versiones belongs to a Proyect
    Versiones.belongsTo(models.Proyectos, {
        foreignKey: 'id_proyecto',
        as: 'proyecto' // Alias to use when fetching associated data
    });

    // A Versiones belongs to a Diagramas
   /* Versiones.belongsTo(models.diagrama, {
        foreignKey: 'id_diagrama',
        as: 'diagrama' // Alias to use when fetching associated data
    });
}*/

Versiones.hasMany(ProyectosCreados,{foreignKey:'dia_secuencias'});
Versiones.hasMany(ProyectosCreados,{foreignKey:'dia_componentes'});
Versiones.hasMany(ProyectosCreados,{foreignKey:'dia_cu'});
Versiones.hasMany(ProyectosCreados,{foreignKey:'dia_paquetes'});
Versiones.hasMany(ProyectosCreados,{foreignKey:'dia_clases'});

ProyectosCreados.belongsTo(Versiones,{foreignKey:'id_version'});
module.exports = Versiones;