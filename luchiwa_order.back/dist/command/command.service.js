"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandService = void 0;
const common_1 = require("@nestjs/common");
const commande_schema_1 = require("./commande.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const client_schema_1 = require("./client.schema");
const product_service_1 = require("../product/product.service");
const product_schema_1 = require("../product/product.schema");
let CommandService = class CommandService {
    constructor(commandModel, clientModel) {
        this.commandModel = commandModel;
        this.clientModel = clientModel;
    }
    searchClient(client) {
        return this.commandModel.find({ client: client }).exec();
    }
    async createCommand(command) {
        const order = { mode: command.mode, hour: command.hour, client: command.client, products: command.products, cutlery: command.cutlery, table: command.table, total: command.total, totalHT: command.totalHT };
        const existingClient = await this.clientModel.find({ _id: command.client._id });
        console.log('client' + existingClient);
        if (!existingClient) {
            const createdClient = new this.clientModel(command.client);
            createdClient.save();
        }
        const createdCommand = new this.commandModel(order);
        console.log(createdCommand);
        return createdCommand.save();
    }
    async getCommand(mode) {
        return this.commandModel.find({ mode: mode });
    }
    async getCommands() {
        return this.commandModel.find();
    }
    async deleteCommand(id) {
        const result = await this.commandModel.remove({ _id: id });
    }
};
CommandService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(commande_schema_1.Command.name)),
    __param(1, mongoose_2.InjectModel(client_schema_1.Client.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], CommandService);
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map