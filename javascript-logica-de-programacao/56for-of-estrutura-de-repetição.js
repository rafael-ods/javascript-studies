/*
FOR OF -> ELE É DIFERENTE DOS DEMAIS POIS ELE NOS RETORNA O VALOR E NAO O INDEX E NAO É ITERAVEL COM OBJETO
*/

const names = ['Rafael', 'Celso', 'Maria']


names.forEach((value, index, array) => { // FOR EACH É UMA FUNCAO QUE RECEBE O VALOR< INDEX, E O ARRAY COMO PARAMETRO
    console.log(value, index, array)
})

for (value of names) { // ELE É DIFERENTE DOS DEMAIS POIS ELE NOS RETORNA O VALOR E NAO O INDEX
    console.log(value)
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

for (let i in names) { // PEGA O INDEX
    console.log(names[i])
}