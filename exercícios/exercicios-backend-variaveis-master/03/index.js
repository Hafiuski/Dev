let preço = 12999;
let dinheiro = 8000;
const desconto = preço - dinheiro;
const cupom = 100 * desconto / preço;
const resultado = Math.round(cupom)

console.log(`O valor do cupom é de ${resultado + 0, 5}%`)
/*
Verifiquei que o resultado da porcentagem
não correspondia exatamente com o valor 
que o cliente tinha em mãos, achei que arredondar
o resultado seria suficiente, no entanto ainda faltariam
centavos, por conta disso acrescentei 0.5 ao resultado para
favorecer o cliente, já que o preço em mãos era exatamente 80.
Eu pensei que estivesse fazendo o cálculo
errado, mas ao comparar com a resolução da atividade
percebi que a fórmula era a mesma
*/


