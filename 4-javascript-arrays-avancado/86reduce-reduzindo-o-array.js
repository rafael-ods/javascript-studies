// REDUCE É UMA FUNÇÃO MAIS UTILIZADA PARA REDUZI UM ARRAY A UM ELEMENTO

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const getSum = numbers.reduce((counter, value, index, array) => { //REDUCE RECEBE UM PARAMETRO DIFERENTE QUE É O ACUMULADOR QUE ESTOU CHAMANDO DE COUNTER, E OS TRES SAO OQ JA ESTAMOS ACOSTUMADO A VER EM MAP, FILTER < FOREACH
    return counter += value

}, 0) // E TEMOS QUE INDICAR O NUMERO QUE O COUNTER IRA INICIAR, CASO NAO INDIQUE ELE INDICARA A PRIMEIRA POSICAO DO ARRAY
console.log(getSum)


const filterNumbersPares = numbers.reduce((counter, value, index, array) => {
    if (value % 2 === 0) counter.push(value) // PEGANDO OS NUMEROS PARES
    // if (value % 2 !== 0) counter.push(value) // PEGANDO OS NUMEROS IMPARES
    // if (value % 5 === 0) counter.push(value) // PEGANDO OS NUMEROS MULTIPLOS DE 5
    return counter
}, []) // ESTAMOS PASSANDO UM ARRAY AGORA ONDE PODEMOS RETORNAR UM NOVO ARRAY FILTRADO
console.log(filterNumbersPares)

//PEGANDO OS VALORES DO ARRAY E MULTIPLICANDO E ADICIONANDO UM NOVO ARRAY
const numbersDouble = numbers.reduce((counter, value, index, array) => {
    counter.push(value * 2)
    return counter
}, []) // ESTAMOS PASSANDO UM ARRAY AGORA ONDE PODEMOS RETORNAR UM NOVO ARRAY FILTRADO

console.log(numbersDouble)

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
//PEGANDO O VALOR MAIOR DE IDADE
const oldYears = names.reduce((counter, value) => {
    console.log(counter, value)
    if (counter.years > value.years) return counter
    return value
})

console.log(oldYears)