// PODEMOS USAR OBJECT.PROPERTY GETTERS E SETTERS

function Product(name, prize, stock) {
    this.name = name
    this.prize = prize
    this.stock = stock
    // PRIMEIRO ARGUMENTO SERA SEMPRE O THIS, SEGUNDO A PROPRIEDADE QUE IREMOS PASSAR
    Object.defineProperty(this, 'stock', {
        enumerable: true, // NOS RETORNA UM BOOLEAN TRUE IRA NOS MOSTRAR A PROPRIEDADE E FALSE NAO IRA NOS MOSTRAR
        configurable: true, // NOS RETORNA UM BOOLEAN QUE TRUE PODEMOS RECONFIGURAR ESSA PROPRIEDADE NOVAMENTE USANDO OBJECT.DEFINEPROPERTY, E SE FOR FALSE NAO PODEMOS FAZER UMA NOVA RECONFIGURAÇÃO E NEM APAGAR ESTA PROPRIEDADE 
        get: function () { //GETTER USAMOS PARA TRANSFORMAR UMA FUNCAO/METODO EM UMA PROPRIEDADE DE UM OBJETO E PEGAR O VALOR ALI DO MOMENTO E EXIBIR COMO NO EX ABAIXO
            return stock
        },

        set: function (value) {
            if (typeof value !== 'number') {
                throw new Error('NUmero invalido')
            }
            return stock = value
        }
    })
}

const prod = new Product('Camiseta', 30, 5)
prod.stock = 5000
console.log(prod.stock)