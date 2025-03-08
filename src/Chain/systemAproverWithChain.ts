//Identidicar a classe -> gerente -> diretor -> ceo
//ordem de process quando sucesso ou filtro -> Filtro

interface Handler{
    setNext(nextHandle: Handler): Handler;
    process(request: number):void;
}

  abstract class BaseHandler implements Handler{
    private nextHandle: Handler;
      setNext(handle: Handler): Handler {
        this.nextHandle = handle;
        return handle;
        
      }
      process(request: number): void {
         if(this.nextHandle){
            this.nextHandle.process(request)
         }else{
            console.log('nenhum manipulado encontrado')
         }
      }

}

class ManagerHandler extends BaseHandler{
    process(request: number): void {
        if (request <= 1000) { 
            console.log("Gerente aprovou o orçamento.");
        }else{
            console.log('Encaminhando para Diretor')
            super.process(request)
        }
    }
}

class DirectHandle extends BaseHandler{
    process(request: number): void {
       if (request <= 10000){
        console.log("Diretor aprovou o orçamento.")

       }else{
        console.log('Encaminhando para CEO')
        super.process(request)
       }
    }
}

class CEOHandler extends BaseHandler{
    process(request: number): void {
        console.log("CEO aprovou o orçamento!", request);
    }
}

export default class IndexSystemAprover{
    constructor(){
        this.init();

    }

    init(){
        const managerHandler = new ManagerHandler();
        const directHandler= new DirectHandle();
        const ceoHandler = new CEOHandler()

        managerHandler.setNext(directHandler).setNext(ceoHandler);

        managerHandler.process(1500)
    }
}