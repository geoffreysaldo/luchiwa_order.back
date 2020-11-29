import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CommandModule } from './command/command.module';
import { CategoryModule } from './category/category.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb://localhost/luchiwa'), CommandModule, CategoryModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
