import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { ClientSchema, Client } from 'src/command/client.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name: Client.name, schema: ClientSchema}]),
],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
