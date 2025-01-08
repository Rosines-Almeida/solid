  export  default class  UserCreate{
    name: string;
    email:string;

    constructor(  name: string, email: string){
        this.name = name;
        this.email = email;
    }

    save(): void{
        console.log('user salvo no banco de dados')
    }
}