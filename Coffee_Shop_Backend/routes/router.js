import express from "express";
// import {createUser, readUsers, createCoffee, readCoffee, createCoffeeBean, readCoffeeBean, createOrder, readOrder} from "../controllers/userController.js";
import {createUser, readUsers} from "../controllers/userController.js";
const router = express.Router();

router.post("/create", createUser);
router.get("/users", readUsers);
/* 
router.post("/create", createCoffee);
router.get("/users", readCoffee);

router.post("/create", createCoffeeBean);
router.get("/users", readCoffeeBean);

router.post("/create", createOrder);
router.get("/users", readOrder); */

export default router;