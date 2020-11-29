import { Document } from 'mongoose';
export declare class Product extends Document {
    name: string;
    category: string;
    price: number;
}
export declare const ProductSchema: import("mongoose").Schema<any>;
