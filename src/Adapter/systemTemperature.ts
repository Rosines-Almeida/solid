 //1- o Adpater engloba a classe que quer adaptar dentro do metodo da interface que é usado
//adapter tem que ter um constructor para  recebe a classe incompátível
//adapter implementa a interface que tem o metodo compatível
//chama o método e dentro dele retorna o metodo incompátivel 
// 2- O cliente chama o adapter passando a classe que quer adaptar 
//o cliente instacia a classe incompátivel
//o cliente passa instacia o adapter e passa a  classe incompátivel para o adapter 


interface TemperatureCelsiosInterface{
    getTemperatureCelsius(temp:number): number;
}

class TemperatureCelsio implements TemperatureCelsiosInterface{
    getTemperatureCelsius(temp: number): number {
        return temp;
    }

}

//classe incompatível 
class FahrenheitTemperatureService {
    getTemperaure(temp: string){
        return temp;
    }

}

class AdapterFahrenheitTemperatureService implements TemperatureCelsiosInterface{
    private fahrenheitTemperature : FahrenheitTemperatureService
    constructor(fahrenheitTemperature:FahrenheitTemperatureService  ){
        this.fahrenheitTemperature = fahrenheitTemperature;

    }
    getTemperatureCelsius(temp: number): number {
        //converter o temp pára string 
        const temString = temp.toString()
         const resut = this.fahrenheitTemperature.getTemperaure(temString)
         //converter result para numver 
        return parseInt(resut)
    }


}

export default class IndexSystemTemperatureAdapter{
    constructor(){
        this.init()
    }

    init(){
        //no cliente deve mudar apenas a instancia do construtor  
        const temperature: TemperatureCelsio = new TemperatureCelsio();
        //const temperature: TemperatureCelsio = new AdapterFahrenheitTemperatureService(new FahrenheitTemperatureService() )

        temperature.getTemperatureCelsius(20)

        console.log(temperature.getTemperatureCelsius(20))
        }


}