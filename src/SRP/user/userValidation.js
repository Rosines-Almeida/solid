"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserValidation {
    type;
    value;
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    validate() {
        if (this.type === 'email') {
            if (!this.value.includes("@")) {
                throw new Error("Email inválido");
            }
            else {
                return true;
            }
        }
        console.log('Validação realizada com sucesso');
    }
}
exports.default = UserValidation;
