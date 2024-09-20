import { Router } from "express";
import { register, registerUser,  } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(register);

export default router;
