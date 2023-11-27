const atributos = { // referenciamos um objeto atraveis e chaves e oq contem dentro é chamado atributos
    name: 'Rafael',
    lastname: 'oliveiira',
    years: 31,
    // podemos passar uma funcao dentro de um objeto tbm da forma abaixo e a palavra reservada this, esta se referindo ao OBJETO ou SEJA THIS = AO NOME DO OBJETO
    talk() {
        console.log(`${this.name} ${this.lastname} tem ${this.years} anos`)
    },
    sumYears() {
        this.years++
    }
}

atributos.talk()
atributos.sumYears()
atributos.talk()
atributos.sumYears()

const createObjeto = (name, lastname, years) => { // funcao de criar objeto de pessoas 
    return {
        name, // como os atributos sao os mesmo nomes que os parametros nao preciso passar desta forma name: name o javascript ja entendi que estamos referenciando um a um
        lastname,
        years,
    }
}

console.log(createObjeto('Rafael', 'oliveiira', 30))
console.log(createObjeto('Celso', 'lino', 62))