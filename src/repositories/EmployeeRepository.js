import pkg from 'prisma';
const {PrismaClient} = pkg;

export class EmployeeRepository {
    constructor() {
        this.prisma = new PrismaClient();
    }
    async findById(id){
        return await this.prisma.employee.findFirst({where: {id}})
    }
    async updateById(id, data){
        return await this.prisma.employee.update({
            where: {id},
            data
        })
    }
    async deleteById(id){
        return await this.prisma.employee.delete({where: {id}})
    }
    async create(data) {
        return await this.prisma.employee.create({data})
    }
}