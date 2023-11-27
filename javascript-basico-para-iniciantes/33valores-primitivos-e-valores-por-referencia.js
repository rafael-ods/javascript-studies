/*
TIPOS DE DADOS PRIMITIVOS: São dados (IMUTAVEIS) ou seja nao podemos mudar nada neles -  valores copiados na memoria 
STRING, NUMBER , BOOLEAN , UNDEFINED , NULL , (BIGINT , SYMBOL)

TIPOS DE DADOS REFERENCIA: São dados (MUTAVEL) qe sa array, object e function - passados por refrencias e linkar o mesmo local da memoria
*/

//TIPOS DE DADOS PRIMITIVOS: São dados (IMUTAVEIS) 
let nameA = 'Rafael'
let nameB = nameA // valor copiado e imutavel

console.log(nameA, nameB)

nameA = 'Celso'
console.log(nameA, nameB)

// TIPOS DE DADOS REFERENCIA: São dados (MUTAVEL) 
const arrayA = [1, 2, 3]
const arrayB = arrayA
console.log(arrayA, arrayB)

arrayA.push(4)
console.log(arrayA, arrayB)

arrayB.pop()
console.log(arrayA, arrayB)

// caso eu realmente queira que o array seja copiado de forma independente podemos usar o spread operator 
const arrayC = ['Rafael', 'celso']
const arrayD = [...arrayC]

arrayC.push('Maria')
console.log(arrayC, arrayD)