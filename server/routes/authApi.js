import bcrypt from "bcrypt";
import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { register, login } from '../controller/AuthController.js';


const router = Router();

router.post("/register", register);

router.post("/login", login);

export default router;
