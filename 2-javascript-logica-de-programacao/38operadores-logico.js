/*
OPERADORES LOGICOS 
&& -> AND =  E = TODAS AS EXPRESSOES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
|| -> OR = OU = BASTA APENAS UMA EXPRESSAO SER VERDADEIRA PARA RETORNAR TRUE
! -> NOT = NAO =  NEGAÇÃO DE UM BOOLEAN
*/


console.log(true && true && false) // TODAS AS EXPRESSOES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
console.log(true || false || false) // BASTA APENAS UMA EXPRESSAO SER VERDADEIRA PARA RETORNAR TRUE

const user = 'Rafael'
const password = '12345'
const login = user === 'Rafael' && password === '12345'
console.log(login)


console.log(!true)
console.log(!false)
console.log(!!true)
console.log(!!false)