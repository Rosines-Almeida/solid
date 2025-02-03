// Produto 1: Notificações
class EmailNotification {
  send(message: string): void {
    console.log(`📧 Enviando e-mail: ${message}`);
  }
}

class SMSNotification {
  send(message: string): void {
    console.log(`📩 Enviando SMS: ${message}`);
  }
}

// Produto 2: Loggers
class EmailLogger {
  log(message: string): void {
    console.log(`📝 Log de E-mail: ${message}`);
  }
}

class SMSLogger {
  log(message: string): void {
    console.log(`📝 Log de SMS: ${message}`);
  }
}

// Código do cliente depende das classes concretas 😬
function processMessage(type: string, message: string) {
  if (type === "email") {
    const notification = new EmailNotification();
    const logger = new EmailLogger();

    notification.send(message);
    logger.log(message);
  } else if (type === "sms") {
    const notification = new SMSNotification();
    const logger = new SMSLogger();

    notification.send(message);
    logger.log(message);
  } else {
    console.log("❌ Tipo de notificação inválido.");
  }
}

// Testando com Email
console.log("🔹 Usando Email:");
processMessage("email", "Bem-vindo ao nosso serviço!");

// Testando com SMS
console.log("\n🔹 Usando SMS:");
processMessage("sms", "Seu código de verificação é 123456.");
