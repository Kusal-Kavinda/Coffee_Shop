import { createOrderPayment } from "./orderPaymentController.js";
import { createCoffeeOrder } from "./coffeeOrderController.js";
import { createCoffeeBeanOrder } from "./coffeeBeanOrderController.js";

const createOrder = async (req, res) => {
    try {
        // Extract necessary data from request body
        const { orderPaymentData, coffeeOrderData, coffeeBeanOrderData } = req.body;

        // Log to check the received request body data
        console.log('Request Body:', req.body);

        // Create Order Payment
        const newOrderPayment = await createOrderPayment(orderPaymentData);

        // Log to check the created order payment
        console.log('New Order Payment:', newOrderPayment);

        // Create Coffee Order
        const newCoffeeOrder = await createCoffeeOrder(coffeeOrderData);

        // Log to check the created coffee order
        console.log('New Coffee Order:', newCoffeeOrder);

        // Create Coffee Bean Order
        const newCoffeeBeanOrder = await createCoffeeBeanOrder(coffeeBeanOrderData);

        // Log to check the created coffee bean order
        console.log('New Coffee Bean Order:', newCoffeeBeanOrder);

        // Return success response with created data
        res.status(201).json({
            message: 'Order created successfully',
            orderPayment: newOrderPayment,
            coffeeOrder: newCoffeeOrder,
            coffeeBeanOrder: newCoffeeBeanOrder
        });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error creating order:', error);

        // Return an error response with the error message
        res.status(500).json({ 
            message: 'Error creating order',
            error: error.message || 'Internal Server Error'
        });
    }
}

export { createOrder };