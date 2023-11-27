/**
 * ATRIBUIÇAO VIA DESESTRUTURAÇÃO NDA MAIS É DO QUE VOCE DAR UM NOME AS POSIÇÃO  INDEX DE UM ARRAY OU OBJETO
 */

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [num1, num2, num3, ...rest] = number // ESTOU ATRIBUINDO NOVAS VARIAVEIS PARA AS POSICOES DE INDEX DO MEU ARRAY

console.log(num1, num2, num3)
console.log(rest) // TEMOS O ...REST QUE NADA MAIS É DO QUE INDICAR O JS QUE VC QUER O RESTO DOS INDEX DO ARRAY

const names = ['rafael', 'celso', 'maria']

const [name1, , name3] = names // NOTA QUE SE EU PULAR O INDEX USANDO , , ELE ME PULARA A POSICAO QUE EU INDICAR

console.log(name1, name3)


const numberArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const [array1, array2, array3] = numberArrays // MODO DE PEGAR POSICAO ARRAY DENTRO DE UM ARRAY
console.log(array3[2])