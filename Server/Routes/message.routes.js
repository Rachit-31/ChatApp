import express from 'express'
import { sendMessage } from '../controller/message.Controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router =express.Router();


router.post("/send/:id", protectRoute, sendMessage )


export default router;