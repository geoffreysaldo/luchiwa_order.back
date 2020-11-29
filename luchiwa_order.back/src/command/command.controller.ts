import { Controller, Post, Body, Delete, Get, Param} from '@nestjs/common';
import { CommandService } from './command.service';
import { Command } from './commande.schema';
import { Mode } from './mode.enum';

@Controller('command')
export class CommandController {

    constructor(private commandService: CommandService){}

    @Post()
    createcommand(
        @Body() command: Command): Promise<Command> {
            return this.commandService.createCommand(command)
        }

    @Get('/:mode')
    getCommand(
        @Param('mode') mode: Mode): Promise<Command[]>{
            return this.commandService.getCommand(mode)
        }
    

    @Delete('/:id')
    deleteCommand(
        @Param('id') id: string): Promise<void>{
            return this.commandService.deleteCommand(id)
        }
}
