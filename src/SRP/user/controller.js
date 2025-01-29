"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userCreate_1 = __importDefault(require("./userCreate"));
const userValidation_1 = __importDefault(require("./userValidation"));
const cliente = new userCreate_1.default('João', 'email');
const clienteValidation = new userValidation_1.default('email', cliente.email);
function isValidSaveEmail() {
    try {
        clienteValidation.validate();
        cliente.save();
    }
    catch (error) {
    }
}
