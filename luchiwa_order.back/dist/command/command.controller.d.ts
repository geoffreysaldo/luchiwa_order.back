import { CommandService } from './command.service';
import { Command } from './commande.schema';
import { Mode } from './mode.enum';
export declare class CommandController {
    private commandService;
    constructor(commandService: CommandService);
    createcommand(command: Command): Promise<Command>;
    getCommand(mode: Mode): Promise<Command[]>;
    getCommands(): Promise<Command[]>;
    deleteCommand(id: string): Promise<void>;
}
