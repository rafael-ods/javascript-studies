/*
OPERAÇÃO TERNARIA É BASICAMENTE UM IF MAIS SIMPLES
SUA SINTAXE (CONDIÇÃO) ? VERDADEIRA  : FALSA
*/

const userScores = 1000
const result = userScores >= 1000 ? 'userVip' : 'userNor'

const colorDefaultUser = 'Blue'
const color = colorDefaultUser || 'black' //NO OPERADOR DE COMPARACAO OR A PRIMEIRA QUE ELE ACHAR COMO VERDADEIRA ELE RETORNARA
console.log(result, color)