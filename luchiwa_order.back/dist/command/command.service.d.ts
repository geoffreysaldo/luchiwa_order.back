import { Command } from './commande.schema';
import { Model } from 'mongoose';
import { Client } from './client.schema';
import { Mode } from './mode.enum';
export declare class CommandService {
    private readonly commandModel;
    private readonly clientModel;
    constructor(commandModel: Model<Command>, clientModel: Model<Client>);
    searchClient(client: Client): Promise<Command[]>;
    createCommand(command: Command): Promise<Command>;
    getCommand(mode: Mode): Promise<Command[]>;
    getCommands(): Promise<Command[]>;
    deleteCommand(id: string): Promise<void>;
}
