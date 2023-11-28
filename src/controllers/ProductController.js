import {ProductService} from "../services/ProductService.js";
import {validationResult} from "express-validator";

export class ProductController {
    static async createNewProduct(req, res){
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.status(403).send({details: validationErrors})
        }
        await ProductService.createNewProduct(req.body)
            .then((data) => {res.status(201).json(data)})
    }
}

