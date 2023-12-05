//FUNCAO QUE SERVE PARA FILTRARMOS UM VALOR DE UM ARRAY, SEMPRE VAI FILTER A MESMA QUANTIDADE DE UM ARRAY OU MENOS QUE O ORIGINAL 

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const newArray = []
//DESAFIO EM AULA, SEM USAR FILTER, USEI O FOREACH PARA ITERAR SOBRE TODOS OS NUMEROS DO ARRAY E E PEGAR O VALOR VE SE ELE É MAIOR QUE 10 E ADICIONAR UM NOVO ARRAY
// numbers.forEach((value) => {
//     if (value > 10) return newArray.push(value)
// })


numbers.filter((value, index, array) => { // FILTER É UMA FUNCAO QUE RECEBE O VALOR  INDEX, E O ARRAY COMO PARAMETRO, VALOR = EXATAMENTE O VALOR DO ARRAY, INDEX = EXATAMENTE O POSIÇÃO INDEXADA DO ARRAY, ARRAY = É EXATAMENTE TODO O ARRAY COMPLETO A CADA ITERAÇÃO
    // console.log(value, index, array)
    if (value > 10) return newArray.push(value)
})


console.log(newArray)

const names = [{
        name: 'Rafael',
        years: 31,
    },
    {
        name: 'Maria Eva',
        years: 64,
    },
    {
        name: 'Celso lino',
        years: 62,
    },
    {
        name: 'Obrigado',
        years: 23,
    },
    {
        name: 'Front',
        years: 6,
    },
    {
        name: 'end',
        years: 1,
    },

]
//FILTRANDO OS NOMES QUE SAO MAIORES QUE 5 LETRAS
const getNames = names.filter((value) => {
    if (value.name.length > 5) return value.name
})
console.log(getNames)
// FILTRANDO AS IDADES QUE SAO MAIOR QUE 50
const getYears = names.filter((value) => {
    if (value.years > 50) return value.years
})
console.log(getYears)
//FILTRANDO TODOS OS NOMES QUE TERMINAM COM A PALAVRA 'A'
const getNamesEndWith = names.filter((value) => {
    if (value.name.toLocaleLowerCase().endsWith('a')) return value.name // ESTAMOS TRANSFORMANDO TODAS AS LETRAS EM MINUSCULAS E COM A FUNCAO ENDSWITH('a') PASSANDO O VALOR 'A' ELA VAI VERIFICAR SE OS NOMES TERMINAM CMO A LETRA A
})

console.log(getNamesEndWith)