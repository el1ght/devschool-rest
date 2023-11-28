import {param} from "express-validator";

export const customerValidator = param('id').exists({checkFalsy: false}).isInt()