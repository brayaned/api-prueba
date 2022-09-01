import { DataTypes }  from 'sequelize';
import {sequelize} from '../database/database.js'
import { Empleado } from './empleado.model.js'
 
export const Departamento = sequelize.define('departamento', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }, 
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    presupuesto: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

Departamento.hasMany(Empleado, {
    foreignKey: 'codigo_departamento',
    sourceKey: 'codigo'
})


Empleado.belongsTo(Departamento, {
    foreignKey: 'codigo_departamento',
    targetId: 'codigo'
})

