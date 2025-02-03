
//interface - cria os metodos que os produtos tem 
interface ReportInterface {
    generate(data: any): void;
}

//criar os produtos 
class PDFReport implements ReportInterface {
    generate(data: any): void {
        console.log(`4- PDFReport -> Gerando relatório em PDF... ${data}`);
        // Simulação de lógica de geração de PDF
    }
}

class CSVReport implements ReportInterface {
    generate(data: any): void { 
        // Simulação de lógica de geração de CSV
    }
}

//criar a classe abstrata que cria um metodo para criar produto 
abstract class ReportFactory { 
    abstract createReportAbs(): ReportInterface //cria um objeto do tipo produto
    
    //metodo que cria o produto
    startProcessReport(message: string): void { //logica de um metodo comum para qq produto
        console.log('1 - Report Factory -> Iniciando o processamento do relatório...');
        const report = this.createReportAbs();
         // passo 2chama o metodo fabrica
        console.log('3- Report Factory -> Instância do relatório criada:', report);

        report.generate(message);
        //passo 3 
     }

    teste() {
        console.log('Método teste chamado.');
    }
}

//criar a classes que usarm os produtos e o metodo da factory
class PDFReportFactory extends ReportFactory {
   
    createReportAbs(): ReportInterface {
        
        console.log('2 - PDFReportFactory -> Criando instância de PDFReport...');
        return new PDFReport();
    }
}

class CSVReportFactory extends ReportFactory {
    createReportAbs(): ReportInterface {
        console.log('Criando instância de CSVReport...');
        return new CSVReport();
    }
}

//consumir as classes
export default class indexFactory {
    constructor() {
         this.init();
    }
    public init() {
         this.handleReport('pdf');
    }

    handleReport(method: string) {
         let factory: ReportFactory;
        switch (method) {
            case 'pdf':
                 factory = new PDFReportFactory();
                break;
            case 'csv':
                 factory = new CSVReportFactory();
                break;
            default:
                throw new Error('Método de relatório não suportado.');
        }
          factory.startProcessReport('message');
     }
}