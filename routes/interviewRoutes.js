import { Router } from "express"
import interviewControllers from '../controllers/interviewControllers.js';

const router = new Router();

router.post('/add',interviewControllers.createInterview);

router.post('/:id',interviewControllers.updateInterview);

export default router;