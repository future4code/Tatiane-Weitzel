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

console.log('---Bem vindo ao jogo de Blackjack!---')

if (confirm("Quer iniciar uma nova rodada?")) {
   let cartaOneUser = comprarCarta()
   let cartaTwoUser = comprarCarta()
   let cartaOneComp = comprarCarta()
   let cartaTwoComp = comprarCarta()
   let totalPtsUser = cartaOneUser.valor + cartaTwoUser.valor
   let totalPtsComp = cartaOneComp.valor + cartaTwoComp.valor

   if (cartaOneUser.texto === 'A' && cartaTwoUser.texto === 'A' || cartaOneComp.texto === 'A' && cartaTwoComp.texto === 'A') {
      cartaOneUser = comprarCarta()
      cartaTwoUser = comprarCarta()
      cartaOneComp = comprarCarta()
      cartaTwoComp = comprarCarta()
   }


   console.log(`Cartas Usuário: ${cartaOneUser.texto} ${cartaTwoUser.texto} Pontuação: ${totalPtsUser}`)
   console.log(`Cartas Computador: ${cartaOneComp.texto} ${cartaTwoComp.texto} Pontuação: ${totalPtsComp}`)


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