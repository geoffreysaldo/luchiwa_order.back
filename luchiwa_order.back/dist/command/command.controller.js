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
exports.CommandController = void 0;
const common_1 = require("@nestjs/common");
const command_service_1 = require("./command.service");
const commande_schema_1 = require("./commande.schema");
const mode_enum_1 = require("./mode.enum");
let CommandController = class CommandController {
    constructor(commandService) {
        this.commandService = commandService;
    }
    createcommand(command) {
        return this.commandService.createCommand(command);
    }
    getCommand(mode) {
        return this.commandService.getCommand(mode);
    }
    getCommands() {
        return this.commandService.getCommands();
    }
    deleteCommand(id) {
        return this.commandService.deleteCommand(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [commande_schema_1.Command]),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "createcommand", null);
__decorate([
    common_1.Get('/:mode'),
    __param(0, common_1.Param('mode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "getCommand", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "getCommands", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommandController.prototype, "deleteCommand", null);
CommandController = __decorate([
    common_1.Controller('command'),
    __metadata("design:paramtypes", [command_service_1.CommandService])
], CommandController);
exports.CommandController = CommandController;
//# sourceMappingURL=command.controller.js.map