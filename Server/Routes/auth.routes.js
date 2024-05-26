import express from "express";
const router = express.Router();
import { signup,logout,login  } from "../controller/auth.Controller.js";

router.get("/signup",signup);
router.get("/login",login);
router.get("/logout",logout);
export default router;