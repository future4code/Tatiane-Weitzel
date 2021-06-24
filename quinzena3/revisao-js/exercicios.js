// EXERCÍCIO 01
function inverteArray(array) {
  const arrReverse = array.reverse()
  return arrReverse
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  //filter 
  const result = array.filter(number => number % 2 === 0)
  const result2 = result.map(result => Math.pow(result, 2))
  return result2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const arrs = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrs.push(array[i])
    }
  }

  return arrs
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  const max = Math.max(...array)

  return max
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const qtd = array.length

  return qtd
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const a = booleano1 && booleano2 && !booleano4
  const b = (booleano1 && booleano2) || !booleano3
  const c = (booleano2 || booleano3) && (booleano4 || booleano1)
  const d = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const e = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  const respostas = [a, b, c, d, e]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let returnP =[]
  for(let i =0; i < n;i++ ){
    returnP.push(i*2)
    
  }
   return returnP
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  
  if (a !== b && b !== c && c !== a) {
    return 'Escaleno'
  } else if (a === b && b === c && c === a) {
    return 'Equilátero'
  } else if (a === b && a !== c) {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
 const numOne =  Math.max(num1, num2)
  const comparationNumbers = {
    maiorNumero: numberMax,
    maiorDivisivelPorMenor: (numberMax % numberMin === 0),
    diferenca: (numberMax - numberMin)
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

}

const arr = [1,2,3,4,5,6,7]
// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  for(let i =0; i<= arr.length - 1; i++){
    for(let x =i+1;x <= arr.length; x++ ){
      if(arr[i] > arr[x]){
        let y = arr[x]
        arr[i] = arr[x]
        arr[x] = y
      }
    }
  }
  let newArr = []
  newArr.push(arr[arr.length -1])
  newArr.push(arr[1])
  return newArr
}

// EXERCÍCIO 11
function ordenaArray(array) {
 
}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
