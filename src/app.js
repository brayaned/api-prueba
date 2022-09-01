import express from 'express'
import departamentoRouter from './router/departamento.router.js'
import empleadoRouter from './router/empleado.router.js'

const app = express();

app.use(express.json());
app.use(departamentoRouter, empleadoRouter);

export default app;




