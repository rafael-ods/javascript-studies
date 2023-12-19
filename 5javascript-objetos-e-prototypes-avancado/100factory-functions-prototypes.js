const talk = {
    talkHi() {
        console.log(`${this.name} Olá`)
    }
}
const toDrink = {
    talkToDrink() {
        console.log(`${this.name} esta bebendo`)
    }
}

const createPeoplePrototype = Object.assign({}, talk, toDrink) // OBJECt.ASSIGN ESTAMOS PEGANDO OS METODOS E ASSINANDO DENTRO DA CONSTANTE QUE VAMOS UTILIZAR DENTRO DA FACTORY FUNCTION

// const createPeoplePrototype = { // ESTAMOS USANDO O SPREAD OPERATOR PARA ESPALHAR OS METODOS E CHAMAR DENTRO DE OBJECT CREATE
//     ...talk,
//     ...toDrink
// }

function createPeople(name, lastname) {
    // const createPeoplePrototype = { // MELHORANDO A PERFORMACE DE UM METODO DENTRO DE UM FUNCAO FACTORY, PASSAMOS UM VARIAVEL QUE RECEBERA UM OBJETO E QUE VAI CONTER TODOS OS NOSSOS METODOS/FUNCAO
    //     talkHi() {
    //         console.log(`${this.name} Olá`)
    //     }
    // }
    return Object.create(createPeoplePrototype, { // E NO RETORNO DA FUNCAO CHAMAMOS O OBJECT.CREATE, PASSAMOS A NOSSA VARIAVEL QUE IRA CONTER O OBJETO DOS METODOS
        name: {
            value: name
        },
        lastname: {
            value: lastname
        }
    })

}

const create = createPeople('Rafael', 'Oliveira')
create.talkHi()
create.talkToDrink()