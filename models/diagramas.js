const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database.js');

class Diagrama extends Model{}
Diagrama.init({
    id_diagrama:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
},{
    sequelize,
    modelName: 'diagrama',
    tableName: 'diagrama',
    timestamps: false
});

    const versiones = require('../models/versiones.js');
    Diagrama.hasMany(versiones, {foreignKey: 'id_diagrama', onDelete: 'SET NULL'})
    versiones.belongsTo(Diagrama, {foreignKey: 'id_diagrama'});
module.exports = Diagrama;