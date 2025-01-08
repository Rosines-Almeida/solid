// Cria um novo usuário. -> classe usuário
// Valida os dados do usuário. -> classe com validações
//Salva o usuário no banco de dados.classe de save
//classe de notificação Envia um e-mail de boas-vindas ao novo usuário.
//classe userManager que ira controlar 

class User{
    constructor(public name: string, public email: string, public password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }

}

class UserValidation{
    
    public validName(name:string){
        return name.length > 0;
    };

    public validEmail(email:string){
        return email.includes('@');
    }

}

class UserSave{
    public saveUser(user: User){
        console.log(`Usuário ${user.name} salvo com sucesso!`);}
};

class NotifyUser{
    constructor(public  type: string,public  user: User){
        this.type = type;
        this.user = user;
    }
    public sendNotify(){

        if(this.type === 'email'){
            
                console.log(`E-mail de boas-vindas enviado para ${this.user.email}`);
            } else if(this.type === 'sms'){
                console.log(`SMS de boas-vindas enviado para ${this.user.email}`);
            }
    }
   
}

class UserManager{
    constructor(public user: User){
        this.user = user;
    }

    public createUser(user: User){
        const userValidation = new UserValidation();
        const userSave = new UserSave();
        const notifyUser = new NotifyUser('email', user);

        if(userValidation.validName(user.name) && userValidation.validEmail(user.email)){
            userSave.saveUser(user);
            notifyUser.sendNotify();
        }
    }
}

export default class IndexUserManager{
    constructor( ){
        this.init
    }

    public init(){
        const user = new User('ana','ana@gmail', '112233' )
        const userManager = new UserManager(user);
        userManager.createUser(user);
    };
}