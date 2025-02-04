//achar as famila
//famila Uber
//famila 99


//achar o produto 
//-> helicoptero( 
// -> moto
//-> carro
//-> 

//criar interfacer para produtos 
//criar a class concerta Produto de cada famila   que usa essas interfaces
//ciar a classe abastact (interface) que une as interface de produto 
//criar a classe familia factory concreta que herda a classe abstract e instancia as classes concretas
//cliente tem duas etapas 
// 1-  metodo que recebe uma fabrica 
//2- cria os produtos (usnado o metodo create )
//3 - usa os obehyos
//2 - escolher a famila


interface AirPlaneInterface {
    checkWindow()
    getCarga()
    startRoute(company: string)

}

interface landInterface {
    startRoute(company: string)
    getCarga()
}

class HelicopterVehicle implements AirPlaneInterface {
    checkWindow() {
        console.log('checkWindow -> vehicle helicopter')
    }
    getCarga() {
        console.log('getCarga -> vehicle helicopter')
    }
    startRoute(company) {
        console.log('startRoute ->  vehicle helicopter', company)
    }

}

class MotoVehicle implements landInterface {
    startRoute(company) {
        console.log('startRoute -> vehicle moto', company);
    }
    getCarga() {
        console.log('getCarga ->  vehicle moto');
    }

}

class CarVehicle implements landInterface {
    startRoute(company) {
        console.log('startRoute ->  vehicile car', company)
    }
    getCarga() {
        console.log('getCarga ->  vehicile car')
    }
}

interface ProcessVehicle {
    createAirPlane(): AirPlaneInterface
    createVehicleTerreste(): landInterface

}

class NineNineTransport implements ProcessVehicle {
    createAirPlane(): AirPlaneInterface {
        return new HelicopterVehicle()
    }
    createVehicleTerreste(): landInterface {
        return new MotoVehicle()
    }
}

class UberTransport implements ProcessVehicle {
    createAirPlane(): AirPlaneInterface {
        return new HelicopterVehicle();
    }
    createVehicleTerreste(): landInterface {
        return new CarVehicle();
    }
}

export default class IndexTransportAbstractFactory {
    public init(method: string) {
        this.handleFamiliyAbastractMethos(method)
    }

    public startProcess(factory: ProcessVehicle, company: string) {
        const vehicleAir = factory.createAirPlane()
        const vehicleland = factory.createVehicleTerreste()

        vehicleAir.startRoute(company)
        vehicleland.startRoute(company)

    }

    public handleFamiliyAbastractMethos(method) {

        switch (method) {
            case 'uber':
                this.startProcess(new UberTransport(), 'uber')
                break;

            case 'ninenine':
                this.startProcess(new NineNineTransport(), 'ninenine')
                break
        }
    }

}