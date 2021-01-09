import { Document } from 'mongoose';
import { Client } from './client.schema';
import { Product } from '../product/product.schema';
import { Mode } from './mode.enum';
export declare class Command extends Document {
    mode: Mode;
    hour: string;
    client: Client;
    products: Product[];
    cutlery: number;
    table: number;
    totalHT: number;
    total: number;
    discount: number;
    payment: string;
}
export declare const CommandSchema: import("mongoose").Schema<any>;
