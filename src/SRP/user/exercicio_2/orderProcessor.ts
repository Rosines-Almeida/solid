//Valida o pedido.-> criar uma classe pedido
//Calcula o preço total.
//Aplica descontos.
//Processa o pagamento.

class OrderProcessor {
    constructor(private items: { name: string; price: number; quantity: number }[], private discount: number) {}
  
    // Valida se o pedido contém itens
    public validateOrder(): boolean {
      if (this.items.length === 0) {
        console.log("O pedido não contém itens.");
        return false;
      }
      console.log("Pedido validado.");
      return true;
    }
  
    // Calcula o preço total dos itens
    public calculateTotal(): number {
      const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      console.log(`Total calculado: R$${total.toFixed(2)}`);
      return total;
    }
  
    // Aplica descontos ao total
    public applyDiscount(total: number): number {
      const discountedTotal = total - this.discount;
      console.log(`Desconto aplicado: R$${this.discount.toFixed(2)}. Total com desconto: R$${discountedTotal.toFixed(2)}`);
      return discountedTotal;
    }
  
    // Processa o pagamento
    public processPayment(finalTotal: number): void {
      console.log(`Pagamento de R$${finalTotal.toFixed(2)} processado com sucesso.`);
    }
  
    // Processa todo o pedido
    public processOrder(): void {
      if (this.validateOrder()) {
        const total = this.calculateTotal();
        const finalTotal = this.applyDiscount(total);
        this.processPayment(finalTotal);
      }
    }
  }
  
  // Uso
  const items = [
    { name: "Produto A", price: 50, quantity: 2 },
    { name: "Produto B", price: 30, quantity: 1 },
  ];
  const discount = 20;
  
  const orderProcessor = new OrderProcessor(items, discount);
  orderProcessor.processOrder();
  