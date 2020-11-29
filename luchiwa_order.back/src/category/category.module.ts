import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/product/product.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
