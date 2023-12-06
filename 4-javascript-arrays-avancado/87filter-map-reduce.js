// RETORNE A SOMA DO DOBRO DE TODOS OS PARES
// DOBRE OS VALORES 
// REDUZIR (SOMAR TUDO)

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numberDoublePar = numbers.filter((value) => {
    if (value % 2 === 0) return value
}).map((value) => {
    return value * 2
}).reduce((counter, value) => {
    counter += value
    return counter
})
console.log(numberDoublePar)