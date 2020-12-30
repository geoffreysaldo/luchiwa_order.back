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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSchema = exports.Command = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const client_schema_1 = require("./client.schema");
const mode_enum_1 = require("./mode.enum");
let Command = class Command extends mongoose_2.Document {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Command.prototype, "mode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Command.prototype, "hour", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", client_schema_1.Client)
], Command.prototype, "client", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Command.prototype, "products", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Command.prototype, "cutlery", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Command.prototype, "table", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Command.prototype, "totalHT", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Command.prototype, "total", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Command.prototype, "reduction", void 0);
Command = __decorate([
    mongoose_1.Schema()
], Command);
exports.Command = Command;
exports.CommandSchema = mongoose_1.SchemaFactory.createForClass(Command);
//# sourceMappingURL=commande.schema.js.map