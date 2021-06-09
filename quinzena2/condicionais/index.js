//Exercícios de interpretação de código
//1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//Teste de condição de um número inserido pelo usuário 
//se o numero for divisível por 2 ,logo o mesmo terá
//resto igual a zero entao,passará no teste
//se não passar no teste,será algum número não divisível por 2


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
//caso a fruta inserida pelo usuário for uma dos casos abaixo,irá retorna a 
//fruta e o valor dela


// "O preço da fruta " "Maçã" " é " "R$ " 2.25

//Iria retorna o valor da pera e iria continuar a ler a linha debaixo

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
//guardando algum número inserido pelo usuario 
//na constante numero

//numero 10 => "Esse número passou no teste"
//numero -10 => mensagem is not defined 

// variavel mensagem está declarado no escopo 
//da condicional if ,como é escopo de bloco ,nao pode
// ser acessado


//Exercícios de escrita de código

const age = Number(prompt('Qual é a sua idade ?'))

if(age >=18){
    let msg =  "Você pode dirigir"
     console.log(msg)
}else{
    msg = "Você não pode dirigir."
     console.log(msg)
}

//2

const studyShift = prompt('Digite o seu turno : M (matutino) ou V (Vespertino) ou N (Noturno)')
if(studyShift === 'M'){
    let msg = 'Bom dia!'
    console.log(msg)
}else if(studyShift === 'V'){
    msg = 'Boa tarde!'
    console.log(msg)
}else if(studyShift === 'N'){
    msg = 'Boa noite!'
    console.log(msg)

}

//3
const studyShift2 = prompt('Digite o seu turno : M (matutino) ou V (Vespertino) ou N (Noturno)')

switch(studyShift2){
    case 'M':
        let msg = 'Bom dia!'
        console.log(msg)
        break
    case 'V':
        msg = 'Boa tarde!'
        console.log(msg)
        break   
    case 'N':
        msg = 'Boa noite!'
        console.log(msg)  
        break
        default:
            console.log('Turno não encontrado!')
}


//4
const movie = prompt('Qual o gênero de filme que irão assistir ?')
const ticket = Number(prompt('Qual o valor de ingresso?'))

if(movie === 'fantasia' && ticket < 15){
  let msg = 'Bom filme!'
    console.log(msg)
}else{
    msg = 'Escolha outro filme :('
    console.log(msg)
}
