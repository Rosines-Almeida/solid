import indexFactory from "./factory/report";
import IndexTransport from "./factory/transport";
import IndexUserManager from "./SRP/user/exercicio_1/userManager";

const curso: string = 'TypeScript 9';

console.log(`Curso de ${curso}`);
// SRP exercicio 1 

const user = new IndexUserManager();
// console.log(user.init());


const factory = new indexFactory()
console.log(factory);


const transport = new IndexTransport();
console.log(transport.init('car'));