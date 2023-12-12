// PODEMOS USAR OBJECT.PROPERTY APENAS UMA CONFIG POR VEZ
// OU PODEMOS UMA OBJECT.PROPERTIES E PODEMOS CONFIGURAR MAIS DE UMA PROPRIEDADE DE UMA VEZ

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
    // Object.defineProperty(this, 'stock', {
    //     enumerable: true,
    //     value: stock,
    //     writable: true, // FOI O EXEMPLO QUE USAMOS PARA RECONFIGURAR COM A CONFIG DE CIMA COMO TRUE E PASSANDO O VALOR WRITABLE PARA TRUE AQUI E ALTERANDO SEU VALOR
    //     configurable: true
    // })


    // PRIMEIRO ARGUMENTO SERA SEMPRE O THIS, E O SEGUNDO UM OBJETO PASSADO QUE DEFINIREMOS TODOS AS NOSSAS PROPRIEDADES EX:  
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: false,
            configurable: true
        },
        prize: {
            enumerable: true,
            value: prize,
            writable: false,
            configurable: true
        },
        stock: {
            enumerable: true,
            value: stock,
            writable: true,
            configurable: false
        }
    })
}

const prod = new Product('Camiseta', 30, 5)
prod.stock = 5000
console.log(prod)

//  OBJECT.KEY(object) NOS RETORNA UM ARRAY COM AS PROPRIEDADES DESSE OBJETO 
console.log(Object.keys(prod))

for (let obj in prod) {
    console.log(obj)
}