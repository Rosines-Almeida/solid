 
import IndexAbstractFactory from "./Abstractfactory/notificationAbstractFactory";
import IndexPaymentSytemAbstractFactory from "./Abstractfactory/paymentSytemAbstractFactory";
import IndexTransportAbstractFactory from "./Abstractfactory/transportAbstractFactory"; 
import IndexSystemPlatform from "./Adapter/Bridge/systemLiveStreaming";
import IndexSytemNotificationBridge from "./Adapter/Bridge/systemNotification";
import IndexSystemTemperatureAdapter from "./Adapter/systemTemperature";
import IndexSystemChargeAdapter from "./Adapter/sytemChargeAdpter";
import IndexServicePCBuilder from "./Builder/servicePcBuilder";
import IndexServicePCBuilderWithDirector from "./Builder/servicePCWithDirector";
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
//console.log(builder.init())

const builderWithDirector = new IndexServicePCBuilderWithDirector()
//console.log(builderWithDirector.init())

const adapterUSB = new IndexSystemChargeAdapter()
console.log(adapterUSB.init())

const adapterTemperature = new IndexSystemTemperatureAdapter()
console.log(adapterTemperature.init())

const systemPaymentBridge = new IndexSytemNotificationBridge('sms', 'promo')
console.log(systemPaymentBridge.init())

const systemLiveStreaming = new IndexSystemPlatform()
console.log(systemLiveStreaming.init())