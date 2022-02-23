const capitalunico = 1000;
let taxa = 12.5 / 100;
let meses = 5;
const montante = capitalunico * Math.pow((1 + taxa), meses);

console.log(montante);