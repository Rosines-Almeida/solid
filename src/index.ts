 
import IndexAbstractFactory from "./Abstractfactory/notificationAbstractFactory";
import IndexPaymentSytemAbstractFactory from "./Abstractfactory/paymentSytemAbstractFactory";
import IndexTransportAbstractFactory from "./Abstractfactory/transportAbstractFactory"; 
import IndexServicePCBuilder from "./FactoryMethod/Builder/servicePcBuilder";
import indexFactory from "./FactoryMethod/reportFactory";
import IndexTransport from "./FactoryMethod/transportFactory";
import IndexUserManager from "./SRP/user/exercicio_1/userManager";

const curso: string = 'TypeScript 9';

console.log(`Curso de ${curso}`);
// SRP exercicio 1 

const user = new IndexUserManager();
// console.log(user.init());


// const factory = new indexFactory()
// console.log(factory);


// const transport = new IndexTransport();
// console.log(transport.init('car'));

// const message = new IndexAbstractFactory()
// console.log(message.handleFamiliyAbastractMethos('email'))


// const paymentSytem = new IndexPaymentSytemAbstractFactory()
// console.log(paymentSytem.handleProcess('payPal'))

const transportAbstractFactory = new IndexTransportAbstractFactory();
//console.log(transportAbstractFactory.init('uber'));

const builder = new IndexServicePCBuilder()
console.log(builder.init())