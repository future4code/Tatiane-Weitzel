/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
   

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Bem vindo ao jogo de Blackjack!')

if (confirm("Quer iniciar uma nova rodada?")) {
   const cartaOneUser = comprarCarta()
   const cartaTwoUser = comprarCarta()
   const totalPtsUser = cartaOneUser.valor + cartaTwoUser.valor
   const cartaOneComp = comprarCarta()
   const cartaTwoComp = comprarCarta()
   const totalPtsComp = cartaOneComp.valor + cartaTwoComp.valor

   console.log(`Cartas Usuário :${cartaOneUser.texto} ${cartaTwoUser.texto} Pontuação: ${totalPtsUser}`)
   console.log(`Cartas Computador:${cartaOneComp.texto} ${cartaTwoComp.texto} Pontuação: ${totalPtsComp}`)


   if (totalPtsUser > totalPtsComp) {
      console.log('Você ganhou!!')
   } else if (totalPtsUser === totalPtsComp) {
      console.log('Empate!')
   } else if (totalPtsUser < totalPtsComp) {
      console.log('O Computador ganhou!!')
   }

   
}

else {
   console.log('O jogo acabou')
}

