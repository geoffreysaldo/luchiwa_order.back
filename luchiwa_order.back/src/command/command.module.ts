import { Module } from '@nestjs/common';
import { CommandService } from './command.service';
import { CommandController } from './command.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Command, CommandSchema } from './commande.schema';
import { Client, ClientSchema } from './client.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Command.name, schema: CommandSchema },{name: Client.name, schema: ClientSchema}]),
],
  providers: [CommandService],
  controllers: [CommandController]
})
export class CommandModule {}
