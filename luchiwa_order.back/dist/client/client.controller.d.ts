import { ClientService } from './client.service';
export declare class ClientController {
    private clientService;
    constructor(clientService: ClientService);
    autocompleClient(startClient: any): Promise<import("../command/client.schema").Client[]>;
}
