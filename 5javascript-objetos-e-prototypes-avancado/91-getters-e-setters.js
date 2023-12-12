// PODEMOS USAR OBJECT.PROPERTY GETTERS E SETTERS

function Product(name, prize, stock) {
    this.name = name
    this.prize = prize
    this.stock = stock
    // PRIMEIRO ARGUMENTO SERA SEMPRE O THIS, SEGUNDO A PROPRIEDADE QUE IREMOS PASSAR
    Object.defineProperty(this, 'stock', {
        enumerable: false, // NOS RETORNA UM BOOLEAN TRUE IRA NOS MOSTRAR A PROPRIEDADE E FALSE NAO IRA NOS MOSTRAR
        value: stock, // PROPRIEDADE QE IREMOS PASSAR COM A PROPRIEDADE EM USO EX: ESTA SENDO A STOCK
        writable: false, // NOS RETORNA UM BOOLEAN QUE TRUE PODEREMOS ALTERAR O VALOR DESSA PROPRIEDADE E SE FOR FALSE NAO PODEREMOS
        configurable: true // NOS RETORNA UM BOOLEAN QUE TRUE PODEMOS RECONFIGURAR ESSA PROPRIEDADE NOVAMENTE USANDO OBJECT.DEFINEPROPERTY, E SE FOR FALSE NAO PODEMOS FAZER UMA NOVA RECONFIGURAÇÃO E NEM APAGAR ESTA PROPRIEDADE 
    })
}

const prod = new Product('Camiseta', 30, 5)
console.log(prod)