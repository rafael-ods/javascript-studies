/*
 SWITCH CASE NADA MAIS É  DO QUE UM MODO DE FAZER IF ELSE COM UMA SINTAXE DIFERENTE    
*/

const weekDays = (day) => {
    const nivel = ['"Domingo"', '"Segunda Feira"', '"Terça feira"', '"Quarta feira"', '"Quinta feira"', '"Sexta feira', '"Sabado"']
    switch (day) {
        case 0:
            return `${day}${nivel[0]}`
        case 1:
            return `${day}${nivel[1]}`
        case 2:
            return `${day}${nivel[2]}`
        case 3:
            return `${day}${nivel[3]}`
        case 4:
            return `${day}${nivel[4]}`
        case 5:
            return `${day}${nivel[5]}`
        default:
            return 'Dia nao localizado'
            // TEMOS A PALAVRA BREAK QUE PRATICAMENTE CUMPRI A FUNCAO DA PALAVRA RETURN, OU SEJA QND É ENCONTRADA AA IF PARA DE SER EXECUTADO
    }
}



const date = new Date('2023-11-21  00:00')
const getDay = date.getDay()

const result = weekDays(getDay)
console.log(result)