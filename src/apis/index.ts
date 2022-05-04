import express from 'express';
import lor from './lor/route';
const router = express.Router();
router.use(lor);
export default router;