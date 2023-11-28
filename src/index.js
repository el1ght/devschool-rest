import express from "express";

import { OrderController } from "./controllers/OrderController.js";
import {ProductController} from "./controllers/ProductController.js";
import {EmployeeController} from "./controllers/EmployeeController.js";
import bodyParser from "body-parser";
import {productValidator} from "./validators/productValidator.js";
import {orderValidator} from "./validators/orderValidator.js";
import {employeeValidator} from "./validators/employeeValidator.js";
import {customerValidator} from "./validators/customerValidator.js";
import {CustomerController} from "./controllers/CustomerController.js";

const app = express()
const port = 3000

app.use(bodyParser.json())

app.delete('/orders/:id', orderValidator, OrderController.deleteSpecificOrder)
app.post('/products', productValidator, ProductController.createNewProduct)
app.patch('/employees/:id', employeeValidator, EmployeeController.updateSpecificEmployee)
app.get('/customers/:id', customerValidator, CustomerController.getAllCustomersOrders)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})