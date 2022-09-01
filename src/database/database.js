import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'prueba',
    'postgres',
    '0000',
    {
    host: 'localhost',
    dialect: 'postgres'
    }
);



