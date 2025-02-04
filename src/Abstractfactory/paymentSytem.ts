// Produto 1: Processadores de Pagamento
class CreditCardPayment {
    process(amount: number): void {
      console.log(`💳 Pagamento de R$${amount} processado via Cartão de Crédito.`);
    }
  }
  
  class PayPalPayment {
    process(amount: number): void {
      console.log(`💰 Pagamento de R$${amount} processado via PayPal.`);
    }
  }
  
 
  class CVVAuth {
    authenticate(): void {
      console.log("🔐 Autenticando via CVV...");
    }
  }
  
  class PayPalAuth {
    authenticate(): void {
      console.log("🔐 Autenticando via PayPal (E-mail e Senha)...");
    }
  }
   
  function processPayment(type: string, amount: number) {
    if (type === "credit_card") {
      const payment = new CreditCardPayment();
      const auth = new CVVAuth();
  
      auth.authenticate();
      payment.process(amount);
    } else if (type === "paypal") {
      const payment = new PayPalPayment();
      const auth = new PayPalAuth();
  
      auth.authenticate();
      payment.process(amount);
    } else {
      console.log("❌ Método de pagamento inválido.");
    }
  }
  
  // 🔹 Testando com Cartão de Crédito
  processPayment("credit_card", 100.0);
  
  // 🔹 Testando com PayPal
  processPayment("paypal", 250.0);
  