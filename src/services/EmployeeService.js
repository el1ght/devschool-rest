import {EmployeeRepository} from "../repositories/EmployeeRepository.js";

export class EmployeeService {
    static async updateSpecificEmployee(employeeId, body){
        const employeeRepository = new EmployeeRepository()
        return await employeeRepository.updateById(employeeId, body)
    }
}