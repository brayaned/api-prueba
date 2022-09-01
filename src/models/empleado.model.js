import { DataTypes }  from 'sequelize';
import {sequelize} from '../database/database.js'

export const Empleado = sequelize.define('empleado', {
    codigo :{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nif: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_2: {
        type: DataTypes.STRING,
        allowNull: true
    }
})


