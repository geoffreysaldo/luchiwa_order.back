import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>){}

    async getProductByCategory(category: string): Promise<Product[]>{
        return this.productModel.find({category: category}).exec();
    }



    async createProduct(product: Product): Promise<Product> {
        console.log(product);
        const createdProduct = new this.productModel(product)
        return createdProduct.save()
    }

    async updateProduct(updateProduct: UpdateProductDto): Promise<UpdateProductDto>{
        const {_id, name, category, price} = updateProduct;
        console.log(price)
        const result = await this.productModel.findOneAndUpdate({_id: _id}, {name: name, category: category, price: price});
        return updateProduct;
    }

    async deleteProduct(id:string): Promise<void> {
        const result = await this.productModel.remove({_id: id});
    }
}
