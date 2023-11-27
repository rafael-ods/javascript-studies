/*
  DATE É UMA FUNCAO CONSTRUTORA E PARA UTILIZARMOS PRECISAMOS PASSAR A PALAVRA new 
  SINTAXE new DATE();

  E FUNCOES CONSTRUTORAS COMEÇAM COM A PRIMEIRA LETRA MAIUSCULA
*/

// const date = new Date()

// console.log(date.getDate()) //FUNCAO QUE PEGA O DIA
// console.log(date.getMonth() + 1) //FUNCAO QUE PEGA O MES E LEMBRANDO QUE EM JS O MES JANEIRO COMECA NO INDEX 0
// console.log(date.getFullYear()) //FUNCAO QUE PEGA O ANO
// console.log(date.getHours()) //FUNCAO QUE PEGA AS HORAS
// console.log(date.getMinutes()) //FUNCAO QUE PEGA OS MINUTOS
// console.log(date.getSeconds()) //FUNCAO QUE PEGA OS SEGUNDOS
// console.log(date.getMilliseconds()) //FUNCAO QUE PEGA OS MILESEGUNDOS
// console.log(date.getDay()) //FUNCAO QUE PEGA O DIA DA SEMANA EM NUMEROS E 0 É REFERENTE A DOMINGO 

// console.log(date.toLocaleString('pt-BR')) // FUNCAO QUE PEGA E NOS RETORNA A DATA CONFORME A SEU PAIS


const formatNumber = (num) => {
    return num >= 10 ? num : `0${num}`
}

const formatDate = (date) => {
    const day = formatNumber(date.getDate()) //FUNCAO QUE PEGA O DIA MES!
    const month = formatNumber(date.getMonth() + 1) //FUNCAO QUE PEGA O MES E LEMBRANDO QUE EM JS O MES JANEIRO COMECA NO INDEX 0
    const year = formatNumber(date.getFullYear()) //FUNCAO QUE PEGA O ANO
    const hours = formatNumber(date.getHours()) //FUNCAO QUE PEGA AS HORAS
    const minutes = formatNumber(date.getMinutes()) //FUNCAO QUE PEGA OS MINUTOS
    const seconds = formatNumber(date.getSeconds()) //FUNCAO QUE PEGA OS SEGUNDOS

    return `${day}/${month}/${year}  ${hours}:${minutes}:${seconds}`
}

const date = new Date()
const resultDate = formatDate(date)

console.log(resultDate)


const nascimento = (idade) => {
    const date = new Date()
    return date.getFullYear() - idade
}

console.log(nascimento(31))