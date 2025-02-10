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

export default class IndexSystemCharge{
    constructor(){
       this.init() 
    }
    init(){
        const usb = new USB();
        usb.chargeUSB()
    }
   
}