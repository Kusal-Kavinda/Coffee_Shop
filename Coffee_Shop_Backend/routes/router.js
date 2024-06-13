import express from "express";

import { createCoffeeBeanOrder, readCoffeeBeanOrder } from "../controllers/coffeeBeanOrderController.js";
import { createCoffeeOrder, readCoffeeOrders } from "../controllers/coffeeOrderController.js";
import {createOrderPayment, readOrderPayment} from "../controllers/orderPaymentController.js";
import {createCoffeeBean, readCoffeeBean} from "../controllers/coffeeBeanController.js";
import {createCoffee, readCoffee} from "../controllers/coffeeController.js";
import {createUser, readUsers} from "../controllers/userController.js";

const router = express.Router();

router.post("/createUser", createUser);
router.get("/users", readUsers);

router.post("/createCoffee", createCoffee);
router.get("/coffees", readCoffee);

router.post("/createCoffeeBean", createCoffeeBean);
router.get("/coffeeBeans", readCoffeeBean);

router.post('/createOrderPayment', createOrderPayment);
router.get('/orderPayments', readOrderPayment);

router.post("/createCoffeeOrder", createCoffeeOrder);
router.get("/coffeeOrders", readCoffeeOrders);

router.post("/createCoffeeBeanOrder", createCoffeeBeanOrder);
router.get("/coffeeBeanOrders", readCoffeeBeanOrder);

export default router;