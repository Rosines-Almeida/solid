//1º Identificar as classes manipuladoradoes e se sequencia
//login ->  twoFactor -> acess

//2º criar a interface
interface Handle{
    setNext(handle: Handle): Handle;
    process(request: String ):void
}

//3º criar a classe base  (que vai fazer conexão)

  abstract class BaseHandle implements Handle{
    private nextHandle: Handle | null = null;
      setNext(nextHandle: Handle): Handle {
        this.nextHandle = nextHandle;
        return nextHandle;
      }
      process(request): void {
        if(this.nextHandle){
            this.nextHandle.process(request)
        }else{
            console.log('nenhum próximo manipulado encontrado')
        }
       }
 }

 //criação das classes Handle que tem a lógica se vai chamar ou mão o proximo Handle (usando o super para chamar o process da classe Base)
class LoginHandle extends BaseHandle{
    process(request: any): void {
        if(request != 'user valid'){
            console.log('LoginHandle -> user válido');
            return;
         } else{
            console.log('LoginHandle -> user inválido');
            request = 'two factors valid';
            super.process(request)
        }
    }
}

class TwoFactorsHandle extends BaseHandle{
    process(request: any): void {
        if(request != 'two factors valid'){
            console.log('TwoFactorsHandle -> inválido');
         }else{
            console.log('TwoFactorsHandle -> valid')
            request = 'acess valid';
            super.process(request)
        }
    }
}

class AcessHandle extends BaseHandle{
    process(request: any): void {
        if(request != 'acess valid'){
            console.log('AcessHandle -> inválido')
        }else{
            console.log('AcessHandle -> válido')

            super.process(request)
        }
    }
}


//Código no cliente
//instacia as classes handle
//define a sequencia do encadeamento
export default class IndexChainAuthetication{
    constructor(){
        this.init();
    }

    init(){
    const loginHandle = new LoginHandle();
    const twoFactorsHandle = new TwoFactorsHandle();
    const  acessHandle = new AcessHandle();

    loginHandle.setNext(twoFactorsHandle).setNext(acessHandle)
    console.log('inciando login')
     loginHandle.process('user valid')

    }
}