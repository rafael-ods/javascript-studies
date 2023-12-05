const arrayOne = [1, 2, 3, 4, 5]

const arrayTwo = [6, 7, 8, 9, 10]

// const addArrays = arrayOne.concat(arrayTwo, [11, 12, 13], 'Rafael') //FUNCAO QUE SERVE PARA JUNTAR ARRAYS CONCATENANDO, E PODEMOS PASSAR OUTRO ARRAY OU ATE OUTRA STRING COMO VALOR COMO NO EXEMPLO

const addArrays = [...arrayOne, "Rafael", ...arrayTwo, [11, 12, 13], ...[14, 15, 16]] //PODEMOS CONCATENAR USANDO O SPREAD OPERATOR, COMO NO EXEMPLO E PODEMOS ADICIONAR UM ARRAY LITERAL USANDO [] E PODEMOS ESPALHAR NOVAMENTE UM ARRAY USANDO SPREAD OPERATOR NOVAMENTE COMO NO EXEMPLO

console.log(addArrays)


//FUNCIONA PARA OBJETOS TBM
const objet1 = {
    names: 'rafael'
};

objet1.names = 'Celso' // ATRIBUINDO VALOR A UM OBJETO ATRAVES DA SUA PROPRIEDADE NAMES

const objet2 = {
    lastname: 'Oliveira'
}

const addObject = {
    ...objet1,
    ...objet2
}

console.log(addObject)