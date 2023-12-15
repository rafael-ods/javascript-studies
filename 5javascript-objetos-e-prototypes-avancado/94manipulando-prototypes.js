//TODA A VEZ QUE FAZEMOS UM OBJETO LITERAL, O JS POR DEBAIXO DOS PANOS JA CHAMA A PALAVRA NEW PARA CRIAÇÃO DE UM OBJECT 
//E TODO OBJETO TEM UM OBJECT.PROTOTYPE
const objectA = {
    keyA: 'AA'
    //__PROTO__: OBJECT.PROTOTYPE
}
const objectB = {
    keyB: 'B'
    //__PROTO__: OBJECT.PROTOTYPE
}

Object.setPrototypeOf(objectB, objectA) //FUNCAO QUE PRIMEIRO PARAMETRO É O OBJETO QUE VAMOS QUERER PEGAR E O SEGUNDO PARAMETRO QUE VAMOS LINKAR AO PRIMEIRO PARAMETRO
console.log(objectB.keyA)


function CreateProduct(name, prize) {
    this.name = name
    this.prize = prize
    //NAO É TAO PERFORMATICO CRIAR FUNCAO DENTRO DE UMA FUNCAO CONSTRUTORA, É MELHOR DEIXARMOS OS METODOS FORA E ACESSAR COMO NOME DA FUNCAO.PROTOTYPE EX: CreateProduct.prototype.NOMEFUNCAO
}

CreateProduct.prototype.discount = function (percentual) { //CreateProduct.prototype FORMA DE CRIAR UM METODO/FUNCAO FORA DO MODELO DA FUNCAO CONSTRUTORA 
    this.prize = this.prize - (this.prize * (percentual / 100))
}

CreateProduct.prototype.discountIncrease = function (percentual) {
    this.prize = this.prize + (this.prize * (percentual / 100))
}


const product = new CreateProduct('Camiseta', 50)
product.discountIncrease(10)
console.log(product)

//OBJETO LITERAL
const product2 = {
    name: 'Shorts',
    prize: 25
}

Object.setPrototypeOf(product2, CreateProduct.prototype) //FUNCAO QUE PRIMEIRO PARAMETRO É O OBJETO QUE VAMOS QUERER PEGAR E O SEGUNDO PARAMETRO QUE VAMOS LINKAR AO PRIMEIRO PARAMETRO
product2.discountIncrease(10) //E AGORA O SEGUNDO OBJETO LITERAL QUE CRIAMOS TEM ACESSOS AOS MESMO METODOS/FUNCAO DA NOSSA FUNCAO CONSTRUTORA

console.log(product2)


const product3 = Object.create(CreateProduct.prototype) // ESTAMOS CRIANDO UM NOVO OBJETO COM CREATE E JA SETANDO O METODO QUE IREMOS QUERER REUTILIZAR NESTE NOVO OBJETO CRIADO
product3.prize = 500
product3.discount(10)
console.log(product3)