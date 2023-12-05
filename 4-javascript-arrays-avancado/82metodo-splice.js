//FUNCAO RESPONSAVEL QUE FAZ A FUNCAO DO POP, PUSH, SHIFT, UNSHIFT
// .splice(index, delete, element1, element2, element3)
// INDEX = INDICAMOS ONDE SERA A POSIçÃO DO ARRAY E OQ VAMOS ADICIONAR TBM
// DELETE = OQ VAMOS DELETAR DESTE ARRAY E QUANTOS VAMOS DELETAR 
const names = ['Rafael', 'Celso', 'Maria eva', 'Casa dos sonhos']

// COMPORTAMENTO DE ADICIONAR NO MEIO OU EM QUALQUER POSICAO DO ARRAY
const addNamesIndex = names.splice(2, 0, 'RAFAEL', 'OBRIGADO DEUS')
console.log(names)


// const getRemoved = names.splice(1, 3) // ESTA INICIANDO NO INDEX 1 E ESTA DELETANDO 3 DA POSICAO DO ARRAY E NOS RETORNA UM NOVO ARRAY
// console.log(names, getRemoved)

// //COMPORTAMENTO POP REMOVER DA ULTIMA POSIçÃO
// const getPop = names.splice(-1, 1)
// console.log(names, getPop)


// // //COMPORTAMENTO SHIT REMOVER DA PRIMEIRA POSIçÃO
// const getShift = names.splice(0, 1)
// console.log(names, getShift)


// //COMPORTAMENTO PUSH ADICIONAR DA ULTIMA POSIçÃO
// const getPush = names.splice(names.length, 0, 'Vai dar tudo certo', 'Eu sei', 'Ola')
// console.log(names)

// // //COMPORTAMENTO UNSHIFT ADICIONAR DA PRIMEIRA POSIçÃO
// const getUnShift = names.splice(0, 0, 'Vai dar tudo certo', 'Eu sei', 'Ola')
// console.log(names)