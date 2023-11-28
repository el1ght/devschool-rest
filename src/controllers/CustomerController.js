import {OrderService} from "../services/OrderService.js";

export class CustomerController {
    static async getAllCustomersOrders(req, res){
        const id = parseInt(req.params.id)
        const result = await CustomerService.getAllCustomersOrders(id)
        res.status(200).json(result)
    }
}