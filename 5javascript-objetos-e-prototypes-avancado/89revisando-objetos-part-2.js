//FUNCTION FACTORY AND CONSTRUCT
// FACTORY
const createPeoples = (name, lastname, years) => {
    return {
        name,
        lastname,
        years,
        get nameComplete() { //GETTER É A PALAVRA RESERVADA QUE INDICAMOS QUE IREMOS TRANSFORMA R
            return `${this.name} ${this.lastname} ${this.years}`
        },

    }
}

const create = createPeoples('Rafael', 'Oliveira', 30)
create.name = 'Maria Eva' //ATRIBUINDO UM NOVO VALOR A UMA PROPRIEDADE DE UM OBJETO 
console.log(create.nameComplete) // AQUI NAO PRECISEI FAZER UMA CHAMADA DE UMA FUNCAO POIS USEI O GETTER PARA TRANSFORMAR ESSA FUNCAO EM UM ATRIBUTO


//CONSTRUCT
function Create(name, lastname, years) {
    this.name = name
    this.lastname = lastname
    this.years = years

    Object.freeze(this) //AO PASSAR DENTRO DA FUNCAO EXATAMENTE TUDO ESTARA TRAVADO
}

const create2 = new Create('Rafael', 'Oliveira', 30)
Object.freeze(create2) //PODEMOS TRAVAR O OBJECT E NAO DEIXAR QUE NADA SEJA MODIFICADO NELE USANDO OBJECT.FREEZE(OBJETO)
console.log(create2)