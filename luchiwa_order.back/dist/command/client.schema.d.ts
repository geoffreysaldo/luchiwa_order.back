import { Document } from 'mongoose';
export declare class Client extends Document {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zipCode: string;
    phoneNumber: string;
}
export declare const ClientSchema: import("mongoose").Schema<any>;
