import pkg from 'prisma';
const {PrismaClient} = pkg;

export class OrderRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }
    async findById(id){
        return await this.prisma.order.findFirst({where: {id}})
    }
    async updateById(id, data){
        return await this.prisma.order.update({
            where: {id},
            data
        })
    }
    async deleteById(id){
        return await this.prisma.order.delete({where: {id}})
    }
}