//1 - criar um sisterma somente com usb
//interface
//clase concreta que utiliza a interface
//codigo do cliente usando a interface

//2 adiccionar um carregrafaro oncompativel
//criar a classe incompatice
//criar o adpater 
//adicionar no cliente

interface USBCharge{
    chargeUSB():void
}

class USB implements USBCharge{
    chargeUSB(): void {
        console.log('carregando com USB')
    }

}

 //x- o Adpater engloba a classe que quer adaptar dentro do metodo da interface que é usado
//adapter tem que ter um constructor para  recebe a classe incompátível
//adapter implementa a interface que tem o metodo compatível
//chama o método e dentro dele retorna o metodo incompátivel 
// x- O cliente chama o adapter passando a classe que quer adaptar 
//o cliente instacia a classe incompátivel
//o cliente passa instacia o adapter e passa a  classe incompátivel para o adapter 

class MicroUSB{
    chargeMicroUSB(){
        console.log('carregando com microusb')
    }
}

class AdapterMicroUSB implements USBCharge {
    constructor(public microUSB: MicroUSB) {
        this.microUSB = microUSB
    }

    chargeUSB(): void {
        return this.microUSB.chargeMicroUSB();

    }

}


 
export default class IndexSystemChargeAdapter{
    constructor(){
       this.init() 
    }
    init(){
        // const charge : USBCharge = new USB() 
        const charge : USBCharge = new AdapterMicroUSB(new MicroUSB) 

        charge.chargeUSB()
         
    }
   
}