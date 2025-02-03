 
import IndexAbstractFactory from "./Abstractfactory/notificationAbstractFactory";
import indexFactory from "./FactoryMethod/reportFactory";
import IndexTransport from "./FactoryMethod/transportFactory";
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

const message = new IndexAbstractFactory()
console.log(message.handleFamiliyAbastractMethos('email'))