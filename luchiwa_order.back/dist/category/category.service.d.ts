import { Product } from 'src/product/product.schema';
import { Model } from 'mongoose';
export declare class CategoryService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getCategories(): Promise<string[]>;
}
