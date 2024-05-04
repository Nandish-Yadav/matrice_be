import { Router } from "express"
import userControllers from '../controllers/userControllers.js';

const router = new Router();

router.post('/register',userControllers.createUser);

router.post('/login',userControllers.loginUser);

export default router;