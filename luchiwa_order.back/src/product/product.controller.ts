import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){
}

    @Get('/:category')
    getProductByCategory(@Param('category') category: string): Promise<Product[]>{
        return this.productService.getProductByCategory(category);
    }


    @Post()
    createProduct(
        @Body() product: Product): Promise<Product> {
        return this.productService.createProduct(product);
    }

    @Put()
    updateProduct(
        @Body() updateProductDto: UpdateProductDto): Promise<Product>{
        return this.productService.updateProduct(updateProductDto);
        }

    @Delete('/:id')
    deleteProduct(
        @Param('id') id: string): Promise<void> {
        return this.productService.deleteProduct(id);
        }
}
