class Approver {
    approve(amount: number): void {
      if (amount <= 1000) {
        console.log("Gerente aprovou o orçamento.");//class gerenteHandller
      } else if (amount <= 10000) {
        console.log("Diretor aprovou o orçamento.");//classe directorHandler
      } else {
        console.log("CEO aprovou o orçamento!"); //classe CEOHandler
      }
    }
  }
  
  // Código Cliente
  const approver = new Approver();
  
  console.log("Pedido de R$ 500:");
  approver.approve(500);
  
  console.log("\nPedido de R$ 5.000:");
  approver.approve(5000);
  
  console.log("\nPedido de R$ 20.000:");
  approver.approve(20000);
  