 // Função que gera relatórios diretamente, sem Factory Method
function generateReport(type: string, data: any): void {
    console.log(`Iniciando geração de relatório do tipo: ${type}`);
    if (type === 'pdf') {
        console.log('Gerando relatório em PDF...');
        // Simulação de lógica de geração de PDF
    } else if (type === 'csv') {
        console.log('Gerando relatório em CSV...');
        // Simulação de lógica de geração de CSV
    } else if (type === 'json') {
        console.log('Gerando relatório em JSON...');
        // Simulação de lógica de geração de JSON
    } else {
        throw new Error('Formato de relatório não suportado.');
    }
    console.log(`Relatório do tipo ${type} gerado com sucesso.`);
}

// Cliente decide o tipo de relatório diretamente
generateReport('pdf', { title: 'Relatório de Vendas', data: [1, 2, 3] });
generateReport('csv', { title: 'Relatório de Vendas', data: [1, 2, 3] });
generateReport('json', { title: 'Relatório de Vendas', data: [1, 2, 3] });
