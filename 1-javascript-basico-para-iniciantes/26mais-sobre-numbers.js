// Javascript segue um pdrão para numeros com referencia IEEE 754-2008

let numberOne = 1500
let numberTwo = 20.25


console.log(numberOne.toFixed(2)) // funcao que exibi a quantidade de casas decimais desejadas ao passar o valor 
console.log(Number.isInteger(numberTwo)) //funcao que nos informa se o numero é inteiro ou nao, e nos retorna uma valor boolean true or false

console.log(numberOne.toString() + numberTwo) // transformação de um tipo number em string somente nesta linha
console.log(typeof (numberOne)) // pois ele continua a ser um tipo number 
numberOne = numberOne.toString() // ao adicionar o numero 2 dentro da funcao toString pegamos o valor BINARIO do numero
console.log(typeof (numberOne)) // aqui pegando a variavel da linha de cima e redeclarando e transformando ela em string agora sim deixou e ser uma number e se tornou um string 