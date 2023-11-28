import pkg from 'prisma';
const {PrismaClient} = pkg;

export class CustomerRepository {

    #include = {
        orders: {
            orders_products: {
                products: true
            }
        }
    }

    constructor() {
        this.prisma = new PrismaClient();
    }
    async findById(id){
        return this.prisma.customer.findFirst({
            where: {id},
            include: this.#include
        })
    }
    async updateById(id, data){
        return this.prisma.customer.update({
            where: {id},
            data
        })
    }
    async deleteById(id){
        return this.prisma.customer.delete({where: {id}})
    }
    async create(data) {
        return this.prisma.customer.create({data})
    }
}