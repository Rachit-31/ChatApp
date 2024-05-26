import express from "express";
const router = express.Router();
import { signup,logout,login  } from "../controller/auth.Controller.js";

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
export default router;