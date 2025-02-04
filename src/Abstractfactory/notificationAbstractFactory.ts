//achar a famila
//famila sms  
//famila email 
//achar o produto 
//-> produto notificação 
// -> produto looger 

//criar interfacer para produtos
//criar a class PrdutoFamila concerta que usa essas interfaces
//ciar a classe abastact que une as interface de produto 
//criar a classe familia factory concreta que herda a classe abstract e instancia as classes concretas
//cliente tem duas etapas 
// 1-  metodo que recebe uma fabrica 
//2- cria os produtos (usnado o metodo create )
//3 - usa os obehyos
//2 - escolher a famila
 
 
interface Notification{
    send(message: string)
}

interface Logger{
    log(message: string)
}

class EmailNotification implements Notification{
    send(message){
        console.log('enviando messagem Email Notification')
    }
}

class EmailLogger implements Logger{
    log(message){
        console.log('Email Logger   ')
    }
}

class SMSNotification implements Notification{
    send(message: string) {
       console.log('enviando messagem SMS notification')
    }
}

class SMSLogger implements Logger{
    log(message){
        console.log('SMS LOGGER ')
    }
}

interface processMessage{
      createNotification(): Notification
    createLogger(): Logger


}

class EmailMessage implements processMessage {

      createNotification():Notification{
    return  new EmailNotification();
    }

    createLogger(){
       return new EmailLogger();
    }

}

class SMSMessage implements processMessage{
    createNotification(): Notification {
       return new SMSNotification();
    }
    createLogger(): Logger {
       return new SMSLogger();
    }

}

export default class IndexAbstractFactory{
 

public init(method: String){
    this.handleFamiliyAbastractMethos(method)
}

public handleFamiliyAbastractMethos(method){
    switch(method){
        case 'email':
            this.handleProductAbstractMethod(new EmailMessage,'messages via email ')
        break;

        case 'sms':
            this.handleProductAbstractMethod(new SMSMessage, 'messages via sms')
            break
    }
     
}

public handleProductAbstractMethod(factory: processMessage, message : string){

   const log =  factory.createLogger()
   const notification =  factory.createNotification();

   log.log(message);
   notification.send(message)

}


}