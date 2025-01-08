export default class UserValidation{
    type: string;
    value: string;
    
    constructor(type: string, value: string){
        this.type = type
        this.value = value
    }

    validate(): boolean{
        if(this.type === 'email'){
            if (!this.value.includes("@")) { 
            
                throw new Error("Email inválido");
            }else{
                return true;
            }
        }
        console.log('Validação realizada com sucesso')
    }

}