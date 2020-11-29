import { Product } from './product.schema';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getProductByCategory(category: string): Promise<Product[]>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(updateProduct: UpdateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}
