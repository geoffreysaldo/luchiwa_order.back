"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandModule = void 0;
const common_1 = require("@nestjs/common");
const command_service_1 = require("./command.service");
const command_controller_1 = require("./command.controller");
const mongoose_1 = require("@nestjs/mongoose");
const commande_schema_1 = require("./commande.schema");
const client_schema_1 = require("./client.schema");
let CommandModule = class CommandModule {
};
CommandModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: commande_schema_1.Command.name, schema: commande_schema_1.CommandSchema }, { name: client_schema_1.Client.name, schema: client_schema_1.ClientSchema }]),
        ],
        providers: [command_service_1.CommandService],
        controllers: [command_controller_1.CommandController]
    })
], CommandModule);
exports.CommandModule = CommandModule;
//# sourceMappingURL=command.module.js.map