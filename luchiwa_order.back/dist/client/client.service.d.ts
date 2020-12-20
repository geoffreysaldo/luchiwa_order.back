import { Client } from 'src/command/client.schema';
import { Model } from 'mongoose';
export declare class ClientService {
    private readonly clientModel;
    constructor(clientModel: Model<Client>);
    autocomplete(startClient: string): Promise<Client[]>;
    findClient(phoneNumber: string): Promise<Client>;
}
