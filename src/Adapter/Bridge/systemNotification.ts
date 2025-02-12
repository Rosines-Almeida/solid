//Sistema que envia notificaçãoes por sms/email para mensagenes de alerta, promo

//separar abstração de implementação
//quem são implementação (meio)
//sms/email
//quem são abastração (como)
//notificação de alerta, promo  

//Para implementação
//criar interface
//criar as class concretas que usam a interface

//Para abastação
//criar classe abstrata com construtor 
//criar as classes concretas que usam a abstração

//Cliente
//a asbtração é feita pela implemnetação
//instancia a abstração e passa a implementação 

interface Midia{
    send(message:string):void
}

class Email implements Midia{
    send(message:string) {
       console.log('envio por email',message);
    }

}

class SMS implements Midia{
    send(message:string) {
        console.log('enviando por sms', message);
    }

}

abstract class Notification{
        midia: Midia
        constructor( midia: Midia){
            this.midia = midia

        }

       abstract sendNotification(message:string) : void


}

class MessageAlerta extends Notification{

    sendNotification(message: string): void {
        this.midia.send('Alerta: Ultimo dia para pagar o boleto')
        
    }

}

class MessagePromotion extends Notification{
    sendNotification(message: string): void {
       this.midia.send('Vários produtos com desconto, corre')
    }

}

export default class IndexSytemNotificationBridge{
    type: string;
    messageType: string;
    constructor(type, messageType){
        this.type = type;
        this.messageType =messageType
        this.init()
    }

    init( ){

        let  midia : Midia; 
        let notification : Notification; 

        switch(this.type){
            case 'email':
                midia = new Email();
                break
            case 'sms':
                midia = new SMS();
                break
        }

        switch(this.messageType){
            case 'alerta':
                notification = new MessageAlerta(midia);
                break
            case 'promo':
                notification = new MessagePromotion(midia);
                break

        }
        notification.sendNotification('')
       
    }
}