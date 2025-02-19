//Sistema que  gera trasnmissão no youTibe/Netflix

//separar abstração de implementação
//quem são implementação (meio)
//YouTube/Netflix
//quem são abastração (como)
// Configuração inicial 
//autentificar 
 

//Para implementação
//criar interface
//criar as class concretas que usam a interface

//Para abastação
//criar interface 
//criar as classes concretas  com construtor (liga os dois pontos)

//Cliente
//a asbtração é feita pela implemnetação
//instancia a abstração e passa a implementação 

interface IPlatform{
    setUp(): void
    authToke(): void
}

class YouTube implements IPlatform{
    // constructor(){
    //     this.setUp()
    // }
    setUp(): void {
       console.log('YouTube-> config inicial')
       this.authToke()
    }
    authToke(): void {
        console.log('YouTube-> auth')
    }

}

class NetFlix implements IPlatform{
    constructor(){
        this.setUp()
    }
    setUp(): void {
       console.log('NetFlix-> config inicial')
       this.authToke()
    }
    authToke(): void {
        console.log('NetFlix-> auth')
    }
}

interface ITrasmition{
    broadcasting(): void;
    result(): void;
}

class Live implements ITrasmition{
    public platform: IPlatform;
    constructor(platform: IPlatform){
         this.platform =  platform;
    }
    broadcasting(): void {
        console.log("Iniciando a Transmissão!");
        this.result()
    }
    result(): void {
        console.log("**** ON AIR ****");
    }
}

export default class  IndexSystemPlatform {
    constructor(){
        this.init()
    }

    init(){ 
        const startTrasmission = new Live(new YouTube())
        startTrasmission.broadcasting()
    }


}