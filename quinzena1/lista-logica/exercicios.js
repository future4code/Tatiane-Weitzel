// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const heightRectangle = Number(prompt('Informe a altura do retângulo:'))
  const widthRectangle = Number(prompt('Informe a largura do retângulo:'))
  const resultRectangle = heightRectangle * widthRectangle
  console.log(resultRectangle)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const currentYear = Number(prompt('Informe o ano atual:'))
  const yearBirth = Number(prompt('Informe o ano do seu nascimento:'))
  const age = currentYear - yearBirth
  console.log(age)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const yourWeight = Number.parseFloat(prompt('Informe o seu peso:'))
  const yourHeight = Number.parseFloat(prompt('Informe sua altura em metros:'))
  const yourIMC = yourWeight /(yourHeight * yourHeight)
  console.log(yourIMC)

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const name = prompt('Olá,qual é o seu nome ?')
  const age = Number(prompt('E sua idade ?'))
  const email = prompt('Qual é seu email ?')

  console.log(`Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const colorOne = prompt('Qual é a sua primeira cor favorita ?')
  const colorTwo = prompt('Qual é a sua segunda cor favorita ?')
  const colorThree = prompt('Qual é a sua terceira cor favorita ?')
  const arrayColors = [colorOne,colorTwo,colorThree]
  console.log(arrayColors)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const myString =  prompt('Escreva uma palavra:')
  console.log(myString.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const showCost = Number(prompt('Informe o custo total do espetáculo: '))
  const ticketValue =  Number(prompt('Informe o valor do ingresso:'))
  const totalCost = showCost/ticketValue
  console.log(totalCost)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  const stringOne = prompt('Escreva uma palavra')
  const stringTwo = prompt('Escreva outra palavra')
  let responseString

  if(stringOne.length === stringTwo.length){
   responseString = true
  }else{
    responseString = false
  }
  console.log(responseString)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const textOne = prompt('Escreva uma palavra').toLowerCase()
  const textTwo = prompt('Escreva outra palavra').toLowerCase()
  let responseText
  
 if(textOne === textTwo){
    responseText = true
 }
 else{
  responseText =  false
 }
 console.log(responseText)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const currentYear = Number(prompt('Informe o ano atual:'))
  const yearBirth = Number(prompt('Informe o ano do seu nascimento:'))
  const currentCNH = Number(prompt('Infome o ano em que sua carteira de identidade foi emitida'))
  const age = currentYear - yearBirth
  const renovationCNH = currentYear - currentCNH
  const validate = (((age <= 20) && (renovationCNH >= 5) ) ||((20 < age) && (age<= 50) && (renovationCNH >= 10 )) || ((50 < age) && (renovationCNH >= 15) ))
 
  console.log(validate)
  
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const currentYear = Number(prompt('Informe o ano atual:'))
  if(currentYear%400 === 0 || currentYear%4=== 0 && currentYear%100 !=0) {
    console.log(true)

  } else{
    console.log(false)
  }
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const questionOne = prompt('Você tem mais de 18 anos?')
  const questionTwo = prompt('Você possui ensino médio completo?')
  const questionThree = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  const validateLabenu = (questionOne === 'sim' && questionTwo === 'sim' && questionThree === 'sim')
  console.log(validateLabenu)
  
}


