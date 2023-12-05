//LEMBETE ARRAYS SAO INDEXADOS IGUAL A STRINGS
//                0         1         2 
// const names = ['Rafael', 'Celso', 'Maria Eva']
const names = new Array('Rafael', 'Celso', 'Maria eva') // PODEMOS DECLARAR UM ARRAY USANDO A PALAVRA RESERVADA NEW ARRAY EX: new Array() NOTA QUE TEMOS () E NAO []
names[0] = 'Oliveira' // PODEMOS ACESSAR A POSICAO DE UM ARRAY DESTA FORMA E ATRIBUIR UM NOVO VALOR A ELE
delete names[0] //DELETA POSICAO DE UM ARRAY SEM MODIFICAR OS INDEX DELE (ORDEM)
const getSlice = names.slice(0, -2) //SLICE USAMOS PARA FATIAR UM ARRAY OU UMA STING, PASSAMOS DOIS PARAMETROS NUMEROS, ONDE INICIA E ONDE TERMINA A POSIÇÃO E PODEMOS PASSAR NUMEROS NEGATIVOS E ELE PEGA DO FINAL DO ARRAY
console.log(names, getSlice)



//ARRAYS FUNCAO E OBJETOS SAO VALORES POR REFERENCIA
const numbers = [1, 2, 3, 4, 5]
const numbers1 = numbers

numbers1.pop() // QUAIS QUER ALTERAÇÃO QUE FOR FEITA EM UM DOIS DOIS SERAO APLICADO NOS DOIS POIS SAO VALORES POR REFERENCIA
console.log(numbers1, numbers)


const numbers2 = [1, 2, 3, 4, 5]
const numbers3 = [...numbers2]

numbers3.shift() //AO USAR O SPREAD OPERATOR ESTAMOS ESPALHANDO O ARRAY E TUDO QUE FOR FEITO AGORA NA VARIAVEL QUE CONTEM ESSE SPREAD NAO SERA AFETADO NO SEU ARRAY DE CRIAÇÃO
console.log(numbers2, numbers3)


const names1 = 'Rafael Oliveira da silva'
const transformArray = names1.split(' ') // USAMOS SLIPT PARA TRANSFORMAR UMA STRING EM ARRAY DANDO O VALOR DE UMA ESPAÇO EX: split(' ')
console.log(transformArray)

const names2 = ['Rafael', 'Oliveira', 'da', 'silva']
const transformString = names2.join(' ') // JOIN É USADO PARA TRANSFORMAR UM ARRAY EM UMA STRING E SE PASSARMOS O VALOR EX: join(' ') SERA SEPARADO POR ESPAÇO
//PRINCIPALMENTE USADO COMO SEPARADOR
console.log(transformString)