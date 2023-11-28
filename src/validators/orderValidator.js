import {param} from "express-validator";

export const orderValidator = param('id').exists({checkFalsy: false}).isInt()