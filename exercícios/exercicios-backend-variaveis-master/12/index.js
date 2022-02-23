let montante = 90000;
let capital = 60000;
let numeroDePeriodos = 24;
const taxaDeJuros = (montante / capital) ** (1 / numeroDePeriodos) - 1;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxaDeJuros}%, pois após ${numeroDePeriodos} meses você teve que pagar ${montante} reais.`);