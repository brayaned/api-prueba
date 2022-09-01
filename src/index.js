import app from './app.js'
import {sequelize} from './database/database.js'
import './models/departamento.model.js'
import './models/empleado.model.js'

async function main(){
    try {
        await sequelize.sync( {alter: true});
        app.listen(1234);
        console.log('Server on port 1234');
    }catch (error) {
        console.log('Unable to connect to database: ', error);
    }

}

main();

