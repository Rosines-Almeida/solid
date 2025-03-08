class AuthService {
    authenticate(user: string) {
      // 1. Verificação de login
      if (user !== "validUser") {//clase login
        console.log("LoginHandler: Usuário inválido.");
        return;
      }
      console.log("LoginHandler: Usuário autenticado.");
  
      // 2. Verificação de autenticação de dois fatores//classe twoFacto
      console.log("TwoFactorAuthHandler: Código de autenticação enviado.");
  
      // 3. Verificação de permissões //classe de Acess
      console.log("AccessControlHandler: Permissões verificadas.");
    }
  }
  
  // Código Cliente
  const authService = new AuthService();
  console.log("Usuário tenta logar:");
  authService.authenticate("validUser");
  

   