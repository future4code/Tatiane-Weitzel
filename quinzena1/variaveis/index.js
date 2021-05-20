//Exercícios de interpretação de código
//Exercício 01
let a = 10
let b = 10

console.log(b)
// 10

b = 5
console.log(a, b)
// 10 5

//Exercício 02
let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)
// 10 10 10 

//Exercício 03

let workHours = Number(prompt("Quantas horas você trabalha por dia?"))
let dayValue = Number(prompt("Quanto você recebe por dia?"))
alert (`Voce recebe ${dayValue/workHours} por hora`)



//Exercícios de escrita de código
//Exercicio 01
let name
let age

console.log(typeof name, typeof age)
// "undefined" "undefined"

/*-------------
O VALOR UNDEFINED SIGNIFICA QUE NENHUM VALOR FOI ATRIBUIDO À VARIÁVEL.
NESSE CASO,OS VALORES DAS VARIÁVEIS name E age NÃO FORAM ATRIBUIDAS.
UNDEFINED = VALOR INDEFINIDO.
----------------*/

let name =  prompt('Qual seu nome ?')
let age = Number(prompt('Qual sua idade ?'))

// VALORES INSERIDOS NO PROMPT E NO INPUT SÃO STRING 
// ENTÃO PRECISAMOS CONVERTER ESSA STRING PARA NUMBER CASO FOR MANIPULAR ALGUM VALOR EM NÚMERO

console.log(typeof name , typeof age)
alert(`Olá ${name},você tem ${idade} anos.`)
// Olá Tatiane,você tem 28 anos.


//Exercicio 02
let questionOne = prompt("Sua camisa é azul?")
let questionTwo = prompt("Hoje é sexta-feira?")
let questionThree = prompt("Está chovendo?")

console.log(`Sua camisa é azul? - ${questionOne}`)
console.log(`Hoje é sexta-feira? - ${questionTwo}`)
console.log(`Está chovendo? - ${questionThree}`)

//"Sua camisa é azul? - sim"
//"Hoje é sexta-feira? - nao"
//"Está chovendo? - nao"


//Exercicio 03
let a = 10
let b = 25
let c;

// Aqui faremos uma lógica para trocar os valores
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10



//Desafio

let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))

console.log(`O primeiro número somado ao segundo número resulta em: ${numberOne + numberTwo}`)
console.log(`O primeiro número multiplicado pelo segundo número resulta em: ${numberOne * numberTwo}`)
