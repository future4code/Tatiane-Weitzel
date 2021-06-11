//Exercícios de interpretação de código
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//incrementando a variável valor
//10


//2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//numero maiores que 18 => 19, 21, 23, 25, 27, 30

//for of => serve para acessar cada elemento num array

//3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
/*
*
**
***
****

*/

//Exercícios de escrita de código

//1
const pets = Number(prompt('Quantos pets vc tem ?'))
let msg

if(pets > 0){
 for(let i = 0; i < pets; i++){
     const arrPets = []
     const namePets = arrPets.push(prompt('Qual é o nome do seu pet ?'))  
    console.log(arrPets)
 }

}else{ 
    msg =  "Que pena! Você pode adotar um pet!"
    console.log(msg)
}


//2

const arrayOriginal = [3,85,6,488,4,27,10,2,88]

//a
const fnOriginal = array =>{
  let newArray = array
    return newArray
}

console.log(fnOriginal(arrayOriginal))

//b
for (const numbers of arrayOriginal) {
    let divNum = numbers/10
      console.log( divNum)    
}

//c
for (const number of arrayOriginal) {
    if(number % 2 === 0){
        let newArrayNumbers = []
        const arrNumbers = newArrayNumbers.push(number)
        console.log(newArrayNumbers)
    }else{
        console.log(arrayOriginal)
    }
}

//d

for (let i = 0; i < arrayOriginal.length; i++) {
   console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}
 //e

 