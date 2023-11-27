const object = {
    name: 'Rafael',
    lastname: 'oliveira',
    year: 30,
    address: {
        street: 'rua ildefonso fontoura',
        number: '234',
        // complement: 'A'
    }
}

const {
    name: nome, // PODEMOS REDECLARAR ATRAVES EX: (NAME: NOME) AGORA O NAME DA VARIAVEL PASSARA SER NOME
    lastname,
    address: { // ESTAMOS ACESSANDO O OBJETO DENTRO DO OBJETO PAI
        street,
        complement = 'B' // PODEMOS ATRIBUIR UM PARAMETRO E UM VALOR DESDE QUE ELE NAO EXISTA NO OBJETO
    },
    address // AQUI ESTAMOS CHAMANDO ELE POR INTEIRO
} = object

console.log(nome, lastname, street, complement, address)

const object1 = {
    name: 'Rafael',
    lastname: 'oliveira',
    year: 30,
    address: {
        street: 'rua ildefonso fontoura',
        number: '234',
        // complement: 'A'
    }
}

const {
    name: name2,
    ...rest
} = object1

console.log(name2, rest)