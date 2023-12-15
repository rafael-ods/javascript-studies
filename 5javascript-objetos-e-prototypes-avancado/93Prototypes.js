//QUANDO ESTAMOS FALANDO DE UMA FUNCAO CONSTRUTORA, ESTAMOS FALANDO DE UM MODE E TBM PODEMOS CHAMAR DE UMA CLASS EM ORIENTAÇÃO A OBJETO
//A FUNCAO CONSTRUTORA SO SERVE DE MODE PARA GERAR OS NOSSOS OBJETOS
function CreatePeople(name, lastname) {
    this.name = name
    this.lastname = lastname

    this.talkName = () => {
        return `${this.name} ${this.lastname}`
    }
}

//CHAMAMOS DE INSTANCIAÇÃO E AQUI É A CHAMADA DO NOSSOS OBJETOS
const createPeopleOne = new CreatePeople('Rafael', 'Oliveira')

console.log(createPeopleOne.talkName())