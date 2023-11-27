/*
EM JAVASCRIPT TUDO PODE SER AVALIADO EM FALSE OU TRUE
FALSY VALUES QUE SÃO: False (valor literal), 0, '',  null / undefine , NaN 
E NA AVALIAÇÃO DE CURTO CIRCUITO NOS RETORNA SEM O VALOR o VALOR
 */

//NO OPERADOR DE && TODAS AS AVALIÇÃO TEM QUE SER VERDADEIRA E SEMPRE O ULTIMO VALOR SERA RETORNADO CASO SEJA VERDADEIRO TODAS, E CASO ENCONTRE UMA FALSY O VALOR DELA SERA RETORNADO 
console.log('Rafael' && 'Celso') // retorna o ultimo valor checado
console.log('Rafael' && 0 && 'celso') // Retorna 0 pq para o operador && todas as condiçoes tem que ser verdadeira e a avaliação nos pega o valor
console.log('Rafael' && 'celso' && NaN) // Retorna NaN pq para o operador && todas as condiçoes tem que ser verdadeira e a avaliação nos pega o valor


//JA NO OR || CASO ENCONTRE A PRIMERIA VERDADEIRA SERA ESTE O VALOR EXIBIDO 
const a = NaN
const b = null
const c = 'False'
const d = false
const e = undefined

console.log(a || b || c || d || e)