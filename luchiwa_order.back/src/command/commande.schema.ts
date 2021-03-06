import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Client} from './client.schema';
import {Product} from '../product/product.schema'
import { Mode } from './mode.enum';

@Schema()
export class Command extends Document{
  @Prop()
  mode: Mode;

  @Prop()
  hour: string;

  @Prop()
  client: Client;

  @Prop()
  products: Product[];

  @Prop()
  cutlery: number;

  @Prop()
  table: number;

  @Prop()
  totalHT: number;

  @Prop()
  total: number;

  @Prop()
  discount: number;

  @Prop()
  payment: string;
}

export const CommandSchema = SchemaFactory.createForClass(Command);
