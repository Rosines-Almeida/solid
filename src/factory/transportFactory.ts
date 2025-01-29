interface TransportInterface {
    getRoute(message): void;
}

class Car implements TransportInterface{
    getRoute(message): void{
        console.log('Car -> Getting route...');
    }
}

class Moto implements TransportInterface{
    getRoute(message): void{
        console.log('Moto');    
    }
}

class Bike implements TransportInterface{
    getRoute(): void{
        console.log('Bike');
    }
}

abstract class TransportFactory{
  abstract createTransport(): TransportInterface

  startTransport(){
    const transport = this.createTransport()
    transport.getRoute('message');
  }
}
 

 class CarFactory extends TransportFactory{
    createTransport(): TransportInterface{
        return new Car();
    }
 }

 class MotoFactory extends TransportFactory{
    createTransport(): TransportInterface {
        return new Moto();
    }
 }

 class BikeFactory extends TransportFactory{
    createTransport() : TransportInterface{
        return new Bike();
        
    }
 }

 
export default class IndexTransport{
      init(type: string){
        this.handleTransport(type);
    }

    public handleTransport(type){
         let transport;
        switch(type){
            case 'car':
                transport = new CarFactory();
                break;
            case 'moto':
                transport = new MotoFactory();
                break;
            case 'bike':
                transport = new BikeFactory();
                break;


    }
     transport.startTransport('message');
    }
}