import { Router } from 'express';
const router = Router();
import {GetAll, Post, GetByCodigo, Delete, Put} from '../controllers/departamento.controller.js'

router.get('/departamento', GetAll);
router.get('/departamento/:codigo', GetByCodigo);
router.post('/departamento', Post);
router.put('/departamento/:codigo', Put);
router.delete('/departamento/:codigo', Delete);



export default router;