"use strict";
// Cria um novo usuário. -> classe usuário
// Valida os dados do usuário. -> classe com validações
//Salva o usuário no banco de dados.classe de save
//classe de notificação Envia um e-mail de boas-vindas ao novo usuário.
//classe userManager que ira controlar 
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    email;
    password;
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
class UserValidation {
    validName(name) {
        return name.length > 0;
    }
    ;
    validEmail(email) {
        return email.includes('@');
    }
}
class UserSave {
    saveUser(user) {
        console.log(`Usuário ${user.name} salvo com sucesso!`);
    }
}
;
class NotifyUser {
    type;
    user;
    constructor(type, user) {
        this.type = type;
        this.user = user;
        this.type = type;
        this.user = user;
    }
    sendNotify() {
        if (this.type === 'email') {
            console.log(`E-mail de boas-vindas enviado para ${this.user.email}`);
        }
        else if (this.type === 'sms') {
            console.log(`SMS de boas-vindas enviado para ${this.user.email}`);
        }
    }
}
class UserManager {
    user;
    constructor(user) {
        this.user = user;
        this.user = user;
    }
    createUser(user) {
        const userValidation = new UserValidation();
        const userSave = new UserSave();
        const notifyUser = new NotifyUser('email', user);
        if (userValidation.validName(user.name) && userValidation.validEmail(user.email)) {
            userSave.saveUser(user);
            notifyUser.sendNotify();
        }
    }
}
class IndexUserManager {
    constructor() {
        this.init;
    }
    init() {
        const user = new User('ana', 'ana@gmail', '112233');
        const userManager = new UserManager(user);
        userManager.createUser(user);
    }
    ;
}
exports.default = IndexUserManager;
