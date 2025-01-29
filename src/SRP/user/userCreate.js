"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserCreate {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    save() {
        console.log('user salvo no banco de dados');
    }
}
exports.default = UserCreate;
