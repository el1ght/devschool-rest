import {body, param} from "express-validator";

export const employeeValidator = [
    param('id').exists({checkFalsy: false}).isInt(),
    body('first_name').optional().isString(),
    body('last_name').optional().isString(),
    body('middle_name').optional().isString(),
    body('position').optional().isString()
]