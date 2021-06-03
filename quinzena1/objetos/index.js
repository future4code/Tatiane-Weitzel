// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//Matheus Nachtergaele
//Virginia Cavendish
//"Globo", horario: "14h"


//2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro) //gato.nome.replaceAll is not a function
//console.log(gato)
//console.log(tartaruga)

//Espalhamaneto de um objeto para outro.


// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // false
// O resultado foi o valor false da propriedade backender,
// console.log(minhaFuncao(pessoa, "altura")) // undefined
// O resultado foi do valor da propriedade altura que não existe no
//objeto pessoa,undefined = valor indefinido.


//Exercícios de escrita de código

// 1
// const pessoa = {
// 	nome: "Tatiane", 
// 	apelidos: ["Tati", "Tatinha", "Quebra-barraco"]
//  }
 
//  const objectPerson = obj => console.log(`Eu sou ${obj.nome}, mas pode me chamar de:${obj.apelidos}`)

//  console.log(objectPerson(pessoa))


//  const newObjPerson = {
// 	 name: 'Tatiane',
// 	 copiaApelidos: [...apelidos]

//  }
//  const objectPerson = obj => console.log(`Eu sou ${obj.nome}, mas pode me chamar de:${obj.apelidos}`)

//  console.log(objectPerson(newObjPerson))


//2

// const objOne ={
// 	nome: 'Tatiane',
// 	idade: 28,
// 	profissao: 'FrontEnd Jr'
// } 

// const fn = (obj) => [obj.nome,obj.nome.length,obj.idade,obj.profissao,obj.profissao.length]

// console.log(fn(objOne))



//3
const carrinho = []

const maca = {
	nome: 'maça',
	disponível: true
}

const pera = {
	nome: 'pêra',
	disponível: true

}

const melancia = {
	nome: 'melancia',
	disponível: true
}

const fn = (obj) => carrinho.push(obj)

console.log(fn(melancia))
console.log(fn(pera))
console.log(fn(maca))
console.log(carrinho)


