// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// //a.  false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 
// // b. false
// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)
// // c. true

// console.log("d. ", typeof resultado)
// // d. boolean


// let primeiroNumero = prompt("Digite um numero!") // 5
// let segundoNumero = prompt("Digite outro numero!") // 5

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// // 55



// let primeiroNumero = prompt("Digite um numero!") 
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// Será impresso a concatenação das strings.
// 


// VALORES INSERIDOS NO PROMPT E NO INPUT SÃO STRING 
// ENTÃO PRECISAMOS CONVERTER ESSA STRING PARA NUMBER CASO FOR MANIPULAR ALGUM VALOR EM NÚMERO
// solucao
// Number(prompt("Digite um numero!")) 

// EXERCÍCIO 1
const yourAge = Number(prompt('Qual a sua idade ?'))
const yourFriendsAge = Number(prompt('Qual a idade do seu melhor amigo(a)?'))

if(yourAge > yourFriendsAge){
    console.log("Sua idade é maior do que a do seu melhor amigo?", true)
}else{
    console.log("Sua idade é maior do que a do seu melhor amigo?", false)
}
console.log(`Diferença de idade é: ${yourAge - yourFriendsAge} anos`)

// EXERCÍCIO 2
const parNumber = Number(prompt("Digite um número par:"))
console.log(parNumber % 2)

//Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// Acontece que aparece apenas o número zero,pois o resto de números pares é zero!
//O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// Quando insere um número ìmpar,mostra o resto da divisão

//EXERCÍCIO 3

const userAge = Number(prompt("Digite sua idade:"))
const ageMonths = userAge *12 
const ageDays = userAge * 365
const ageHours = userAge * 8760
console.log(`A idade do usuário em meses ${ageMonths}`)
console.log(`A idade do usuário em dias ${ageDays}`)
console.log(`A idade do usuário em horas ${ageHours}`)

//EXERCÍCIO 4

const numberOne = Number(prompt("Digite o primeiro número:"))
const numberTwo = Number(prompt('Digite o segundo número:'))

if(numberOne > numberTwo){
    console.log(`O primeiro numero é maior que segundo? ${true}`)      
}else if(numberOne === numberTwo){
    console.log(`O primeiro numero é igual ao segundo? ${false}`)
}else if(numberOne % numberTwo ==0){
    console.log(`O primeiro numero é divisível pelo segundo? ${true}`)
}else if(numberTwo % numberOne == 0){
    console.log(`O segundo numero é divisível pelo primeiro? ${true}`)
}






