//CENARIO DE UM E-COMMERCE 
// TEMOS UM PRODUTO pode conter aumento de preço e desconto
//CAMISETA pode ter cor, CANECA pode ter material ou platisco ou metal

function CreateProduct(name, prize) {
    this.name = name
    this.prize = prize
}

//METODO FORA DA FUNCAO CONSTRUTORA
CreateProduct.prototype.discountIncrease = function (value) {
    this.prize += value
}
//METODO FORA DA FUNCAO CONSTRUTORA
CreateProduct.prototype.discount = function (value) {
    this.prize -= value
}

function Camiseta(name, prize, color) {
    CreateProduct.call(this, name, prize) //Funcao CALL QUE LINKA UMA FUNCAO CONSTRUTORA A OUTRA HERDA AS PROPS
    this.color = color
}
Camiseta.prototype = Object.create(CreateProduct.prototype)
Camiseta.prototype.constructor = Camiseta //  prototype.constructor PARA PASSARMOS A REFERENCIA PARA CAMISETA

CreateProduct.prototype.discountIncrease = function (percentual) { // PODEMOS REESCREVER UM METODO DE UMA FUNCAO CONSTRUTORA DESTA FORMA
    this.prize = this.prize + (this.prize * (percentual / 100))
}



const camiesta1 = new Camiseta('Regata', 7.5, 'Vermelha')
camiesta1.discountIncrease(100)
console.log(camiesta1)


Caneca.prototype = Object.create(CreateProduct.prototype)
Caneca.prototype.constructor = Caneca

function Caneca(name, prize, material, stock) {
    CreateProduct.call(this, name, prize)
    this.material = material

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function () {
            return stock
        },
        set: function (value) {
            if (typeof value !== 'number') {
                throw new TypeError('Numero Invalido')
            }
            return stock = value
        }
    })
}

const caneca = new Caneca('Batman', 20, 'plastico', 10)
caneca.discountIncrease(5)
caneca.stock = 500
console.log(caneca.stock)