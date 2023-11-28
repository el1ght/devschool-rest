import {OrderRepository} from "../repositories/OrderRepository.js";

export class OrderService {
    static async deleteSpecificOrder(orderId){
        const orderRepository = new OrderRepository()
        return await orderRepository.deleteById(orderId)
    }
}