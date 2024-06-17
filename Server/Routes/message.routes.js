import express from 'express'
import { getMessages, sendMessage } from '../controller/message.Controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router =express.Router();


router.get("/:id", protectRoute, getMessages )
router.post("/send/:id", protectRoute, sendMessage )

export default router;