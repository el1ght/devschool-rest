import {body} from "express-validator";


export const productValidator = [
    body("name").exists({checkFalsy: true}).isString(),
    body("category").exists({checkFalsy: true}).isIn(["Phones", "Tablets", "Notebooks"]),
    body("amount").exists({checkFalsy: true}).isInt(),
    body("price").exists({checkFalsy: true}).isFloat()
]