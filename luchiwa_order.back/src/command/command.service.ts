import { Injectable } from '@nestjs/common';
import { Command } from './commande.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './client.schema';
import { ProductService } from 'src/product/product.service';
import { Product } from 'src/product/product.schema';
import { Mode } from './mode.enum';

@Injectable()
export class CommandService {

    constructor(@InjectModel(Command.name) private readonly commandModel: Model<Command>,
             @InjectModel(Client.name) private readonly clientModel: Model<Client>){}

    searchClient(client: Client){
        return this.commandModel.find({client: client}).exec()
        }

    async createCommand(command: Command){
        console.log(command)
        const order = {mode: command.mode, hour: command.hour, client: command.client, products: command.products, cutlery: command.cutlery, table: command.table, total: command.total}
        const createdCommand = new this.commandModel(order)
        const existingClient = await this.searchClient(command.client);
        if(existingClient.length === 0){
            const createdClient = new this.clientModel(command.client);
            createdClient.save();
        }
        return createdCommand.save()
    }

    async getCommand(mode: Mode): Promise<Command[]>{
        return this.commandModel.find({mode: mode})
    }

    async deleteCommand(id: string): Promise<void>{
        const result = await this.commandModel.remove({_id: id})
    }


}
