import { Injectable } from '@nestjs/common';
import { Client } from 'src/command/client.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {

    constructor(
        @InjectModel(Client.name) private readonly clientModel: Model<Client>){}

    async autocomplete(startClient: string): Promise<Client[]> {
        const clients = await this.clientModel.find({lastName: { $regex: '(?i)'+ startClient}});
        return clients
    }

    async findClient(phoneNumber: string): Promise<Client> {
      console.log(phoneNumber)
      const client = await this.clientModel.findOne({phoneNumber: phoneNumber});
      return client
    }
}
