/**
 * ESTRUTURA FOR () {}
 * 1 - PRIMEIRO O INICIALIZADOR QUE SEMPRE SERA UMA VARIAVEL COM ALGUM VALOR OBS PODENDO INCIALIZAR EM QUAIS VALOR
 * 2 - CONDIÇÃO QUE SERA ESSE INICIALIZADOR(VARIAVEL MAIS SUA CONDIÇÃO
 * 3 - INCREMENTADOR OU DECREMENTADOR 
 */


const fruitList = ['Maça', 'Banana', 'caju']


for (let i = 0; i < fruitList.length; i++) {
    console.log(fruitList[i])
}

// const num = 10

// for (let i = 0; i <= 10; i++) {
//     console.log(`${num}x${i} = ${num * i}`)
// }

// for (let i = 5; i <= 10; i += 2) { // ESTAMOS INDICANDO QUE O CONTADOR INICIA NO 5 E PARA NO 8 e PODEMOS INDICAR DE QNTS EM QNTS VAI PULAR TBM, TANTO POSITIVO E TANTO NEGATIVO
//     console.log(`${i}`)
// }

// for (let i = -5; i <= 5; i++) { // NUMEROS NEGATIVOS
// }

// for (let i = 0; i <= 10; i++) {
//     const dividerRest = i % 2 === 0 ? 'Par' : 'impar' // CHECK EM NUMEROS PARES E IMPARES
//     console.log(dividerRest, i)
// }