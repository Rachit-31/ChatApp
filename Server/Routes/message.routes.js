import express from 'express'
import { deleteMessage, getMessages, sendMessage } from '../controller/message.Controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router =express.Router();


router.get("/:id", protectRoute, getMessages )
router.post("/send/:id", protectRoute, sendMessage )
router.delete("/:id", deleteMessage);

export default router;