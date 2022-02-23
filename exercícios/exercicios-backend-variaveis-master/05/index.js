/*let xUm = 1;
let xDois = 1;
let yUm = 1;
let yDois = 4;
let xTres = Math.pow(xDois - xUm, 2);
let yTres = Math.pow(yDois - yUm, 2);
const distancia = Math.sqrt(xTres + yTres);
console.log(`A distância é ${distancia}`);*/

// OU

let xUm = 1;
let xDois = 1;
let yUm = 1;
let yDois = 4;
const distancia = Math.sqrt((xDois - xUm) ** 2 + (yDois - yUm) ** 2);

console.log(distancia)

/*A princípio testei esse segundo código, mas percebi que
o que eu estava errando era ao usar o comando Math.pow(base, expo) 
ao invés do comando base ** expo, depois de ver a resolução 
testei mais uma vez alcançando o resultado esperado*/


