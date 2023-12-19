//CLASS EM JS É A MESMA COISA QUE UMA FUNCAO CONSTRUTORA, SO COM A SINTAXE DIFERENTE
// CRIANDO UMA CLASS, USAMOS A PALAVRA RESERVADA CLASS E DEPOIS USAMOS MESMA ESTRUTURA DE SINTAXE DE UMA FUNCAO CONSTRUTORA

class CreatePeople {
    constructor(name, lastname) { //METODO QUE UTLIZAMOS PARA PASSAR PARAMETROS
        this.name = name
        this.lastname = lastname
    }

    talk() {
        console.log(`Olá meu nome é ${this.name} ${this.lastname}`)
    }
}
// INTÂNCIAR UM FUNCAO CONSTRUTORA ATRAVES DE CONST QUE NADA MAIS É DO QUE UM OBJETO
const create = new CreatePeople('Rafael', 'Oliveira')
console.log(create)

create.talk()


//EXEMPLO E COMPARAÇÃO A FUNCAO CONSTRUTORA

function CreatePeopleTwo(name, lastname) {
    this.name = name
    this.lastname = lastname
}

CreatePeopleTwo.prototype.talk = function () {
    console.log(`${this.name} ${this.lastname} esta dizendo seja bem vindo`)
}



const createTwo = new CreatePeopleTwo('Rafael', 'Oliveira')
createTwo.talk()