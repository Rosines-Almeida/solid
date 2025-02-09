// Classe PC sem usar o padrão Builder
//clase produto(PC) que tem muitos paramaetros para ser incializada 

//contructore -metodo recebe estes argumentos que incia quando a classe é chamada - tudo  que  esta nele deve ser passado quando uma classe é chamada
//regra para repassara as infromações do contrutor deve ser declaradas em var da propria classe (this)
//

//POR QUE MELHORAR?
 //-manunteção -> ?     
 //imutabilidade -> ?  
 //codigo mais limpo


 //QUANDO É USADO?
 //Quando tem obejtos complexos (classes que rcebem muitos argumentos(+4)), pqfica dificil de lembrar a ordem , para adicionar mais atributo tem que lembrar a ordem?
 //quando este obejto é usado para diferentes variações 

//Como executar?
//1- criar a classe contrutora (PC)
//2- crrar a classe builder (intermediaria entre cliente e o contrutort) -deve ter um metodo que retorn a classe construtora 
//-metodos que adcionar os valore e metodo que controu( build) 
//3 - criar o códifo do cliente que chama  o classe builder 

//Classe constritora 
class PC{
    private cpu:string;
    private ram:number;
    private storage:number;
    

    constructor( 
        cpu:string,
        ram:number,
        storage: number
    ){

        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
    }

    showSpec(){
        console.log(
            `🖥️ Configuração do PC: CPU: ${this.cpu}, RAM: ${this.ram}GB, ` +
            `Armazenamento: ${this.storage}  }`
          );
    }

}

//classe Builder
//contém métodos para receber os valores, e depois passar para a classe construtora
//os métodos de adicioanr valores , devem retornar this, para poderm serem usados com encadeamento no código do cliente.
//método build -> passa os valores para classe construtora
class PCBuilder{
    private cpu:string;
    private ram:number;
    private storage:number;


    addCPU(cpu:string){
        this.cpu = cpu
        return this;
    }

    addRAM(ram: number){
        this.ram = ram;
        return this;

    }

    addStorage(storage:number){
        this.storage = storage;
        return this;

    }

//método Builder para passar os valores ,  e criar o produto
    build():PC {
        return new PC(this.cpu, this.ram, this.storage)
    }
}


//nó código do cliente instaciar a classe builder
//passar os valores para o método e chamar a método builder
//
export default class IndexServicePCBuilder{
    constructor(){
        this.init()
    }

    init(){
        const builder = new PCBuilder()
        const pcGammer = builder
        .addCPU('222')
        .addRAM(59)
        .addStorage(999)
        .build()
      

        pcGammer.showSpec()
     
    }


}