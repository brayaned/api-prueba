import { Router } from 'express';
const router = Router();
import {GetAll, Post, GetByCodigo, Delete, Put} from '../controllers/empleado.controller.js'

router.get('/empleado', GetAll);
router.get('/empleado/:codigo', GetByCodigo);
router.post('/empleado', Post);
router.put('/empleado/:codigo', Put);
router.delete('/empleado/:codigo', Delete);



export default router;

