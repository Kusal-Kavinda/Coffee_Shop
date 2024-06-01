import express from "express";
import {createUser, readUsers} from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/users", readUsers);

export default router;