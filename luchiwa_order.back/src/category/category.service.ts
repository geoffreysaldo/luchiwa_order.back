import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/product/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>){}

    async getCategories(): Promise<string[]>{
        const result = await this.productModel.distinct('category').exec()
        result.sort();
        return result
    }
}
