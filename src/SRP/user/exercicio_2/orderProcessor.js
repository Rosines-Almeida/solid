"use strict";
//Valida o pedido.-> criar uma classe pedido
//Calcula o preço total.
//Aplica descontos.
//Processa o pagamento.
Object.defineProperty(exports, "__esModule", { value: true });
class OrderProcessor {
    items;
    discount;
    constructor(items, discount) {
        this.items = items;
        this.discount = discount;
    }
    // Valida se o pedido contém itens
    validateOrder() {
        if (this.items.length === 0) {
            console.log("O pedido não contém itens.");
            return false;
        }
        console.log("Pedido validado.");
        return true;
    }
    // Calcula o preço total dos itens
    calculateTotal() {
        const total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        console.log(`Total calculado: R$${total.toFixed(2)}`);
        return total;
    }
    // Aplica descontos ao total
    applyDiscount(total) {
        const discountedTotal = total - this.discount;
        console.log(`Desconto aplicado: R$${this.discount.toFixed(2)}. Total com desconto: R$${discountedTotal.toFixed(2)}`);
        return discountedTotal;
    }
    // Processa o pagamento
    processPayment(finalTotal) {
        console.log(`Pagamento de R$${finalTotal.toFixed(2)} processado com sucesso.`);
    }
    // Processa todo o pedido
    processOrder() {
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
