const people = ['Rafael', 'Maria', 'Celso']
// LEMBRETE TUDO QUE FOR ALTERADO DENTRO DE UMA ARRAY OS ELEMENTOS GANHARAM UM NOVO INDEX (NUMERO DE IDENTIFICACAO)


people.unshift('Alice') // funcao que adiciona ao começo do array
console.log(people)

people.push('Eva') // funcao que adiciona ao final do array
console.log(people)

const removeShift = people.shift() // funcao que remove a primeira posicao do array
console.log(removeShift)

const removePop = people.pop() // funcao q remove a ultima posicao do array 
console.log(removePop)

delete people[0] // deleta a posicao do array sem alteraar a posicao como todo do array, no lugar do index deletado substitui por <1 empty item>
console.log(people)

// people[people.length] = 'Bolsa de valores' // acessando a ultima posicao do array e atribuindo um novo valor
// console.log(people)


// people[0] = 'Programação' // acessando o indice 0 e atribuindo um novo valor
// console.log(people)


// console.log(people[0]) // podemos acessar um array desta forma igual a uma STRING