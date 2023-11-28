import {ProductRepository} from "../repositories/ProductRepository.js";

export class ProductService {
    static async createNewProduct(body){
        const productRepository = new ProductRepository()
        return await productRepository.create(body)
    }
}