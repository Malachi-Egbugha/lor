import express from 'express';
import {createLorHandler,readallLorHandler,updateLorHandler} from './controller';
const router = express.Router();
router.post('/lor/create',createLorHandler);
router.get('/lor/readalllor/:lornumber?',readallLorHandler);
router.put('/lor/updatelor/:id',updateLorHandler);
export default router;