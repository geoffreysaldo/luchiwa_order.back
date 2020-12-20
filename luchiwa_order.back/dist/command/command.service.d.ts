import { Command } from './commande.schema';
import { Model } from 'mongoose';
import { Client } from './client.schema';
import { ClientService } from 'src/client/client.service';
import { Mode } from './mode.enum';
export declare class CommandService {
    private readonly commandModel;
    private readonly clientModel;
    private clientService;
    constructor(commandModel: Model<Command>, clientModel: Model<Client>, clientService: ClientService);
    searchClient(client: Client): Promise<Command[]>;
    createCommand(command: Command): Promise<Command>;
    getCommand(mode: Mode): Promise<Command[]>;
    getCommands(): Promise<Command[]>;
    deleteCommand(id: string): Promise<void>;
}
