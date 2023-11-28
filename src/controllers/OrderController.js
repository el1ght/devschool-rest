import {OrderService} from "../services/OrderService.js";

export class OrderController {
    static async deleteSpecificOrder(req, res){
        const id = parseInt(req.params.id)
        const result = await OrderService.deleteSpecificOrder(id)
        res.json(result)
    }
}