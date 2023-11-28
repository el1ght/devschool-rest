import { PrismaClient } from '@prisma/client'

export class ProductRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }
    async findById(id){
        return await this.prisma.product.findFirst({where: {id}})
    }
    async updateById(id, data){
        return await this.prisma.product.update({
            where: {id},
            data
        })
    }
    async deleteById(id){
        return await this.prisma.product.delete({where: {id}})
    }
    async create(data) {
        return await this.prisma.product.create({data: data})
    }
}