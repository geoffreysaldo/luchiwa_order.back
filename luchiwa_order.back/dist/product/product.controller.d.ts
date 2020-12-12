import { ProductService } from './product.service';
import { Product } from './product.schema';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getProductByCategory(category: string): Promise<Product[]>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(updateProductDto: UpdateProductDto): Promise<UpdateProductDto>;
    deleteProduct(id: string): Promise<void>;
}
