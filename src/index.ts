import IndexUserManager from "./SRP/user/exercicio_1/userManager";

const curso: string = 'TypeScript 9';

console.log(`Curso de ${curso}`);
// SRP exercicio 1 

const user = new IndexUserManager();
console.log(user.init());