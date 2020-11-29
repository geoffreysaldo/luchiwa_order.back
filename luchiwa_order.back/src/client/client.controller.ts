import { Controller, Get, Body, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { start } from 'repl';

@Controller('client')
export class ClientController {

    constructor(private clientService: ClientService){}

    @Post()
    autocompleClient(@Body() startClient: any){
        console.log(startClient);
        return this.clientService.autocomplete(startClient.lastname);
    }

}
