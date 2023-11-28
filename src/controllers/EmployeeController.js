import {EmployeeService} from "../services/EmployeeService.js";

export class EmployeeController {
    static async updateSpecificEmployee(req, res){
        const id = parseInt(req.params.id)
        res.send(await EmployeeService.updateSpecificEmployee(id, req.body))
    }
}