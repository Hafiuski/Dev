let população = 1000;
let pessoasPróximas = 4;
let tempo = 100;
const pessoasInfectadas = população * Math.pow(pessoasPróximas, tempo / 7);

console.log(`Estima-se que dentro de ${tempo} dias ${pessoasInfectadas} pessoas estarão infectadas.`);