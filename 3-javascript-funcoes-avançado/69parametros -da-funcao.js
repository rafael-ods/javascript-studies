// EM UMA FUNÇÃO DE DECLARAçÃO PADRAO SE NAO PASSARMOS ARGUMENTOS PARA OS (PARAMETROS) A ESTA FUNCAO E PASSARMOS NA CHAMADA DELA
// O JS NAO ACUSARA ERRO E FUNCIONARA MESMO ASSIM EX:

function sumNumber() {
    let counter = 0
    for (let argument of arguments) { //NOTA SE QUE NAO PASSAMOS PARAMETRO NO INICIO DELA E SIM APENAS NA SUA CHAMADA E COM A PALAVRA RESERVADA ARGUMENTS CONSEGUIMOS ACESSAR ESSES VALORS 
        counter += argument
    }
    console.log(counter)
}

sumNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


const sum = (a, b = 2, c = 3) => { // PODEMOS SETAR O VALOR DE UM PARAMETRO JA DESDE O INICIO
    console.log(a + b + c)
}
sum(2, 3) //AO CHAMAR A FUNCAO APENAS COM O VALOR DE A, ELE CALCULARA POIS OS DEMAIS PARAMETROS JA ESTAO COM VALORES, E SE ATRIBUIMOS UM NOVO VALOR A ESSAS VARIAVEIS, O VALOR ATRIBUIDO FARA A SUBSTITUIÇÃO

const createObject = ({
    name,
    lastname,
    years
}) => {
    console.log(name, lastname, years)
}
//PODEMOS COLOCAR EM UMA VARIAVEL E CHAMAR O OBJETO
createObject({
    name: 'Rafael',
    lastnameL: 'Oliveira',
    years: 30
})

const counterSum = (operador, counter, ...numbers) => { //PODEMOS USAR O REST OPERATOR PARA NAO PRECISAR PASSAR UM MONTE DE PARAMETROS, OBS: ELE REALMENTE TEM Q SER O FINAL DOS ARGUMENTOS
    for (let number of numbers) {
        if (operador === '+') counter += number
        if (operador === '-') counter -= number
        if (operador === '*') counter *= number
        if (operador === '/') counter /= number
    }
    console.log(counter)
}

counterSum('+', 0, 2, 3, 4, 5, 6, 7, 8, 9, 10)