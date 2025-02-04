//achar as famila
//CreditCardPayment e PayPalPayment
 
//achar o produto 
//-> process( 
// -> authenticate 

//criar interfacer para produtos
//criar a class concerta Produto de cada famila   que usa essas interfaces
//ciar a classe abastact (interface) que une as interface de produto 
//criar a classe familia factory concreta que herda a classe abstract e instancia as classes concretas
//cliente tem duas etapas 
// 1-  metodo que recebe uma fabrica 
//2- cria os produtos (usnado o metodo create )
//3 - usa os obehyos
//2 - escolher a famila

interface ProcessPayment{
     process(amout: number);
}

interface ProcessAuthenticate{
    authenticate()
}

class CreditCardPayment implements ProcessPayment{
    process(amount){
        console.log(`💳 Pagamento de R$${amount} processado via Cartão de Crédito.`)
    }

}

class PayPalPayment implements ProcessPayment{
    process(amount){
        console.log(`💰 Pagamento de R$${amount} processado via PayPal.`)
    }
}

class CreditCardAuthenticate implements ProcessAuthenticate{
    authenticate(){
        console.log("🔐 Autenticando via CVV...");  
    }

}

class PayPalPaymentAuthenticate implements ProcessAuthenticate{
    authenticate(){
        console.log("🔐 Autenticando via PayPal (E-mail e Senha)...");
    }
}

interface PaymentSystemProcess{
    createProcessPayment():ProcessPayment
    createProcessAuthenticate():ProcessAuthenticate
}


class CreditCardProcess implements PaymentSystemProcess{
    createProcessPayment():ProcessPayment{
       return new CreditCardPayment()
    };

    createProcessAuthenticate():ProcessAuthenticate{
        return new CreditCardAuthenticate();

    };

}

class PayPalPaymentProcess implements PaymentSystemProcess{
    createProcessPayment(): ProcessPayment {
         return new PayPalPayment()
    }
    createProcessAuthenticate(): ProcessAuthenticate {
       return new  PayPalPaymentAuthenticate()
    }

}

//código do cliente
export default class  IndexPaymentSytemAbstractFactory{
 public init(method: string){
   
 }

 //metodo que cria os prudtudos usando a factorua abastract

 startProcess(factory:PaymentSystemProcess, amount: number ){
    const auth = factory.createProcessAuthenticate()
    const payment = factory.createProcessPayment();

    auth.authenticate()
    payment.process(amount)

 }

 handleProcess(method){
    switch(method){
        case 'creditCard':
            this.startProcess(new CreditCardProcess(), 11)
            break;

        case 'payPal':
            this.startProcess(new PayPalPaymentProcess(),88)
            break;
    }
 }
}