//Exercícios de interpretação de código

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// A )
//10
//50
//B )
//A funcao seria executada normalmente,porem não iria aparecer o resultado para nós

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

//A)
// funcao transforma as frases do usuario em lowercase e verifica se na frase há string 'cenoura'

//B)
// Todas as 3 frases retornam como resultado TRUE

//Exercícios de escrita de código

//1
//A
const myInfos = () => 
    console.log(`Eu sou Tatiane, tenho 28 anos, moro em Petrópolis RJ e sou estudante.`)

console.log(myInfos())

// //B

const myInfos2 = (name,age,city,occupation) =>{
    const infos = `Eu sou ${name}, tenho ${age} anos, moro em ${city} e sou ${occupation}.`
    return infos
}

console.log(myInfos2("Tatiane",28,'Petrópolis','estudante'))


//2
//A
const sum = (num1,num2) =>{
    const result = num1+num2
    return result
}
console.log(sum(2,2))

//B

const sum2 = (num1,num2) =>{
    const result = num1 > num2 
    return result
}
console.log(sum2(10,5))


//C
const phrase = (text) =>{
    const resultText = text.toUpperCase()
    return resultText
}
console.log(phrase('Olá mundo').length, phrase('Olá mundo'))

//3
const num1 = Number(prompt('Digite um número:'))
const num2 = Number(prompt('Digite outro número:'))
const sum = (a,b) => a+b
const subt = (a,b) => a-b
const mult = (a,b) => a*b
const div = (a,b) => a/b

console.log(sum(num1,num2))
console.log(subt(num1,num2))
console.log(mult(num1,num2))
console.log(div(num1,num2))


//DESAFIO
//1
const fn = a => console.log(a)


const callbk = (x,y) => {
   const sum =   x+y
    fn(sum)}

console.log(callbk(2,2))

//2

const calc = (cat1,cat2) => {
     const hip = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2,2))
    
    return hip
}

console.log(calc(2,2))
//2.82
