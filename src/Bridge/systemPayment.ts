//
//meio artão de crédito, PIX e
//o que faz: assinatura mensal, compra avulsa ou doação
//criar implantação
//interface
//classes abstratas com constrictor 

//asbtarc
//criar interfcae
//criar as classes concretas que irão fazer a conexão (com constructor 

//cliente 
//chamar somente a a classe de abstação )
//2º etapa adicionar  PayPal

class CreditCardPayment {
    processPayment(amount: number) {
        console.log(`💳 Pagamento de R$${amount} processado via Cartão de Crédito.`);
    }
}

class PixPayment {
    processPayment(amount: number) {
        console.log(`⚡ Pagamento de R$${amount} processado via PIX.`);
    }
}

class PayPalPayment {
    processPayment(amount: number) {
        console.log(`🅿️ Pagamento de R$${amount} processado via PayPal.`);
    }
}

// Tipos de pagamento
class Subscription {
    private paymentMethod: any;

    constructor(paymentMethod: any) {
        this.paymentMethod = paymentMethod;
    }

    pay(amount: number) {
        console.log("🔄 Processando Assinatura...");
        this.paymentMethod.processPayment(amount);
    }
}

class OneTimePurchase {
    private paymentMethod: any;

    constructor(paymentMethod: any) {
        this.paymentMethod = paymentMethod;
    }

    pay(amount: number) {
        console.log("🛒 Processando Compra Avulsa...");
        this.paymentMethod.processPayment(amount);
    }
}

// Código Cliente
const subscriptionWithCreditCard = new Subscription(new CreditCardPayment());
subscriptionWithCreditCard.pay(50);

const purchaseWithPix = new OneTimePurchase(new PixPayment());
purchaseWithPix.pay(100);
