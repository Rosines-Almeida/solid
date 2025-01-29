"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = __importDefault(require("./factory/factory"));
const userManager_1 = __importDefault(require("./SRP/user/exercicio_1/userManager"));
const curso = 'TypeScript 9';
console.log(`Curso de ${curso}`);
// SRP exercicio 1 
const user = new userManager_1.default();
// console.log(user.init());
const factory = new factory_1.default();
console.log(factory.init());
