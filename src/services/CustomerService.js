import {CustomerRepository} from "../repositories/CustomerRepository.js";

export class CustomerService {
    static async getAllCustomersOrders(customerId){
        const customerRepository = new CustomerRepository()
        const { orders } = await customerRepository.findById(customerId)
        let customerOrders = []
        let totalCost = 0
        orders.forEach((order) => {
            let costOfOrder = 0
            order.orders_products.forEach((product) => {
                costOfOrder += product.amount * product.product.price
            })
            costOfOrder += order.delivery_cost
            customerOrders.push({
                id: order.id,
                customerId: order.customer_id,
                employeeId: order.employee_id,
                address: order.order_address,
                deliveryCost: order.delivery_cost,
                orderDate: order.order_date,
                totalCost: costOfOrder
            })
        })
        return {
            orders: customerOrders,
            totalCost: totalCost
        }
    }
}