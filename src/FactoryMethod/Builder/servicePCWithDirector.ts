
//criando a interface para as classes Builder
//✔ Garante que qualquer Builder siga o mesmo contrato.

interface PCBuilderInterface{
   addCPU(cpu:string):this;
   addRAM(ram: number):this;
   addStorage(storage:number): this;

   build(): PC;
}

//criando as classes Builder implementando as interface
//
class PCGammer implements PCBuilderInterface{

    private cpu: string;
    private ram: number;
    private storage: number;

    addCPU(cpu: string): this {
         this.cpu = cpu;
         return this;
    }
    addRAM(ram: number): this {
        this.ram = ram;
        return this;
    }
    addStorage(storage: number): this {
        this.storage = storage;
         return this;
    }
    build():PC{
        return new PC(this.cpu, this.ram, this.storage)
    }
    
}

class PCOffice implements PCBuilderInterface{

    private cpu: string;
    private ram: number;
    private storage: number;

    addCPU(cpu: string): this {
         this.cpu = cpu;
         return this;
    }
    addRAM(ram: number): this {
        this.ram = ram;
        return this;
    }
    addStorage(storage: number): this {
        this.storage = storage;
         return this;
    }
    build():PC{
        return new PC(this.cpu, this.ram, this.storage)
         
    }
    

}

class PC{
    private cpu: string;
    private ram: number;
    private storage: number;

    constructor(
        cpu:string,
        ram: number,
        storage: number
    ){
       this. cpu= cpu;
        this.ram= ram;
        this.storage= storage;

    }

    showSpec(){
        console.log(
            `🖥️ Configuração do PC: CPU: ${this.cpu}, RAM: ${this.ram}GB, ` +
            `Armazenamento: ${this.storage}  }`
          );
        }
}

//recebe a instacia da classe construtora
//responsável por chamar os metodos e conter os valores para cirar o objeto
//cada produto pode ter todos os metodos ou não 
class Director{
   createPCGamer(builder:PCBuilderInterface):PC{
     return builder
     .addCPU('pcGamer')
     .addRAM(688)
     .addStorage(89)
     .build()

   }

   creatPCOffice(builder:PCBuilderInterface):PC{
    return builder
    .addCPU('pcOffice')
    .addRAM(8)
    .build()
   }
}


export default class IndexServicePCBuilderWithDirector  {
    constructor(){
        this.init()
    }

    init(){

    //criar um produto
    const PcGameBuilder = new PCGammer()
    const pcGamer  = Director.prototype.createPCGamer(PcGameBuilder)
    pcGamer.showSpec()

    const PCOfficeBuilder = new PCOffice();
    const  pcOffice = Director.prototype.creatPCOffice(PCOfficeBuilder);
    pcOffice.showSpec()
    }
}
 