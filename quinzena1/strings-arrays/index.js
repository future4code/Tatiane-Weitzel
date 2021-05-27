//Exercícios de interpretação de código
//let array
//console.log('a. ', array)

// 'a. ' undefined

//array = null
//console.log('b. ', array)

// 'b.' null

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)

// 'c.', 11

//let i = 0
//console.log('d. ', array[i])

// 'd.', 3


//array[i+1] = 19
//console.log('e. ', array)

// 'e.', [3,19,5,6,7,8,9,10,11,12,13]

//const valor = array[i+6]
//console.log('f. ', valor)

//'f.', 9

// EXERCICIO 2
//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS 27


//Exercícios de escrita de código

//1.
const emailUser = prompt('Digite seu email:')
const nameUser = prompt('Digite seu nome:')

console.log(`O e-mail ${emailUser} foi cadastrado com sucesso. Seja bem-vinda(o),${nameUser}!`)



//2.
let foods = ['churrasco','comida japonesa','macarrão','frango frito','pizza']
console.log(foods)
console.log("Essas são as minhas comidas preferidas: ")
console.log(foods[0])
console.log(foods[1])
console.log(foods[2])
console.log(foods[3])
console.log(foods[4])
const favoritefood = prompt('Qual a sua comida preferida?')
foods[1] = favoritefood 
console.log(foods[0])
console.log(foods[1])
console.log(foods[2])
console.log(foods[3])
console.log(foods[4])


//3.
const listaDeTarefas = []
const taskOne = listaDeTarefas.push(prompt('Digite a primeira tarefa a ser realizada:'))   
const taskTwo =  listaDeTarefas.push(prompt('Digite a segunda tarefa a ser realizada:'))   
const taskThree = listaDeTarefas.push(prompt('Digite a terceira tarefa a ser realizada:'))   

console.log(listaDeTarefas)

const taskDone = prompt('Digite o número da Tarefa já realizada (número de 0 a 2)')
const newArrayTask = delete listaDeTarefas[taskDone]
console.log(listaDeTarefas)

