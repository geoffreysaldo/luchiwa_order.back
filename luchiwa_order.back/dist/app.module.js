"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_module_1 = require("./product/product.module");
const command_module_1 = require("./command/command.module");
const category_module_1 = require("./category/category.module");
const client_module_1 = require("./client/client.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [product_module_1.ProductModule, mongoose_1.MongooseModule.forRoot('mongodb://localhost/luchiwa'), command_module_1.CommandModule, category_module_1.CategoryModule, client_module_1.ClientModule],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map