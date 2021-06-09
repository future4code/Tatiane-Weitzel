//Exercícios de interpretação de código

//1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

/*  O teste verifica se o número inserido pelo usuário
é divisível por 2

Se o resto da divisao for igual a zero,Passou no teste

Se tiver resto ou seja,os não divisíveis por 2 ,não passou...
*/

//2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*é uma condiçao ,para cada fruta digitada pelo usuário
terá o seu valor.
se caso não houver a fruta que o usuário digitou o valor padrao
será 5.

O preço da fruta Maçã é R$ 2.25

retirando o break,ele iria informar o valor default
*/

//3

/*
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//Primeira linha,armazena numa constante um número digitado
pelo usuário

//Esse número passou no teste
//mensagem is not defined
// mensagem está declarado dentro de um escopo de bloco
e a mesma só pode ser acessada dentro dela...
let mensagem so pode ser acessada dentro do bloco do IF

*/

//Exercícios de escrita de código


//1
// const age = Number(prompt('Digite a sua idade:'))

// if(age >= 18){
//     let msg = 'Você pode dirigir'
//     console.log(msg)
// }else{
//     msg = 'Você não pode dirigir'
//     console.log(msg)
// }


//2
const studyShift = prompt('Informe seu turno,M (matutino) ou V (Vespertino) ou N (Noturno)')
let msg
if(studyShift === 'M'){
    msg = 'Bom dia!'
    console.log(msg)
}else if(studyShift === 'V'){
    msg = 'Boa Tarde!'
    console.log(msg)
}else if(studyShift === 'N'){
    msg = 'Boa noite'
    console.log(msg)
}

//3

const studyShift2 = prompt('Informe seu turno,M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase()

switch (studyShift2) {
    case 'M':
        msg = 'Bom dia!'
        console.log(msg)
        break
    case 'V':
        msg = 'Boa Tarde!'
        console.log(msg)
        break
    case 'N':
        msg = 'Boa noite'
        console.log(msg)  
        break
    default:
        msg = 'Turno não encontrado!'
        console.log(msg)
        break;
}

//4
const movie = prompt('Qual o gênero de filme que vão assistir ?')
const ticketValue = Number(prompt('Qual o valor do ingresso ?'))
let msg
if(movie === 'fantasia' && ticketValue <= 15){
    msg = 'Bom filme!'
    console.log(msg)
}else{
    msg = 'Escolha outro filme :('
    console.log(msg)
}
// Desafio

//1
const movie = prompt('Qual o gênero de filme que vão assistir ?')
const ticketValue = Number(prompt('Qual o valor do ingresso ?'))
const snack = prompt('Qual será seu lanche ?')
let msg
let msg2
if(movie === 'fantasia' && ticketValue <= 15){
    msg = 'Bom filme!'
    msg2 = `Aproveite seu ${snack}`
    console.log(msg2)
    console.log(msg)
}else{
    msg = 'Escolha outro filme :('
    console.log(msg)
}



