// FUNCAO MAP RETORNA O MESMO ARRAY ORIGINAL SO QUE COM OS VALORES ALTERADOS

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numberDouble = numbers.map((value, index, array) => { // MAP É UMA FUNCAO QUE RECEBE O VALOR  INDEX, E O ARRAY COMO PARAMETRO, VALOR = EXATAMENTE O VALOR DO ARRAY, INDEX = EXATAMENTE O POSIÇÃO INDEXADA DO ARRAY, ARRAY = É EXATAMENTE TODO O ARRAY COMPLETO A CADA ITERAÇÃO
    return value * 2
})

console.log(numberDouble)

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
// ESTAMOS RETORNANDO APENAS UM ARRAY COM OS NOMES
const getStringName = names.map((value) => {
    return value.name
})
console.log(getStringName)

const getYearsName = names.map((value) => {
    // delete value.name // PODEMOS DELETAR UMA PROPRIEDADE DE UM OBJETO DESTA FORMA
    return { // OU PODEMOS RETORNAR UM NOVO OBJETO CHAMANDO UMA NOVA PROPRIEDADE DE YEARS E ATRIBUINDO O VALOR DESTA PROPRIEDADE COM A PROPRIEDADE E VALOR DO OBJETO ANTIGO
        years: value.years
    }
})
console.log(getYearsName)


const addIdNames = names.map((value, index) => { // PODERIA USAR O INDEX PARA COLOCAR NO VALOR DO ID

    value.id = index // NESTE CASO ESTAMOS PEGANDO O OBJETO E ADICIONANDO UMA NOVA PROPRIEDADE ID E COLOCANDO O INDEX NELA E RETORNANDO NOVAMENTE O OBJETO
    return value

    // return { // NESTE CASO EU CRIEI UM NOVO OBJETO E PASSEI PARA A VARIAVEL OU SEJA O OBJETO QUE ESTAMOS MAPEANDO NAO COSTA A PROPRIEDADE ID
    //     id: numberRandom(),
    //     ...value,
    // }

    // const newObject = { NESTE CASO EU CRIEI UM NOVO OBJETO E PASSEI PARA A VARIAVEL OU SEJA O OBJETO QUE ESTAMOS MAPEANDO NAO COSTA A PROPRIEDADE ID
    // ...value
    // }
    // newObject.id = numberRandom()
    // return newObject
})

console.log(addIdNames)

function numberRandom(min = 1, max = 5000) {
    return Math.floor(Math.random() * (min * max) * min)
}

console.log(names)