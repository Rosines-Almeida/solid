class PC {
    private cpu: string;
    private ram: number;
    private storage: number;
    private gpu: string;
    private headSeat?: string;
  
    constructor(
          cpu: string,   ram: number,    storage: number,   gpu:string,   headSeat?:string) {
      cpu = cpu;
      this.ram = ram;
      this.storage = storage;
      this.headSeat = headSeat
       
    }
  
    showSpecs() {
      console.log(
        `🖥️ Configuração do PC: CPU: ${this.cpu}, RAM: ${this.ram}GB, ` +
        `Armazenamento: ${this.storage}GB, GPU: ${this.gpu}, Headseat${this.headSeat}`
      );
    }
  
    // Métodos para modificar as configurações
    setCPU(cpu: string) {
      this.cpu = cpu;
    }
  
    setRAM(ram: number) {
      this.ram = ram;
    }
  
    setStorage(storage: number) {
      this.storage = storage;
    }
  
    setGPU(cpu: string) {
      this.gpu = cpu;
    }
  }
  
  // Criando um PC Gamer
  const gamingPC = new PC("Intel i9", 32, 2000, "RTX 4090");
  gamingPC.showSpecs();
  
  // Criando um PC de Escritório e alterando suas configurações depois
  const officePC = new PC("Intel i5", 16, 512, "Integrada", 'heat');
  officePC.setCPU("Intel i7"); // Modificando o processador depois
  officePC.showSpecs();

  //criar um produto (pc)
  const productGamingPc = new PC('',0,0,'')
  //PROCUSTGAMINGPC VAI TER TODOS OS METODOS 
  productGamingPc.showSpecs();

  

   