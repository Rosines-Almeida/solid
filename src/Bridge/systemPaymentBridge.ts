interface IMethodPayment{
    processPayment(amount: number):void
}

class CreditCardPayment implements IMethodPayment{
    constructor(amount){
        this.processPayment(amount)
    }
    processPayment(amount: number): void {
        console.log('CreditCardPayment -> processPayment');
    }
}

class PixPayment implements IMethodPayment{
    processPayment(amount: number): void {
        console.log('PixPayment -> processPayment');
    } 
}

interface ITypePayment{
    pay(amount:number):void
}

class OneTimePurchase implements ITypePayment{
    public methodPayment : IMethodPayment
    constructor(methodPayment: IMethodPayment){
        this.methodPayment =methodPayment 
    }

    pay(amount: number ): void {
      console.log('OneTimePurchase -> pay')
    }

}

class Subscription implements ITypePayment{
   public methodPayment : IMethodPayment
    constructor(methodPayment: IMethodPayment){
        this.methodPayment =methodPayment 
    }

    pay(amount: number): void {
        console.log('Subscription -> pay')
    }
}

export default class IndexSystemPaymentBridge{
    constructor(){
        this.init()
    }

    init(){
        const startpayment = new OneTimePurchase(new CreditCardPayment(100))
        startpayment.pay(4)
    }
}