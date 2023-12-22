//DADOS PRIMITIVOS SYMBOL, SERVE PARA CRIAR UMA CHAVE PRIVADA PARA UTILIZAMOS DENTRO NOSSO OBJETO E COM ELE GERA UM ID QUE NUNCA SERA UM VALOR REPETIDO
const _speed = Symbol('speed') // CRIANDO UMA CHAVE PRIVADA PARA UTILIZAMOS E DENTRO DA FUNCAO ONDE VAMOS UTILIZAR PASSAMOS ATRAVES DE [] COMO NO EXEMPLO ABAIXO
class Car {
    constructor(name) {
        this.name = name
        this[_speed] = 0
    }

    get speed() { //VELOCIDADE
        return this[_speed]
    }

    set speed(value) {
        if (typeof value !== 'number') {
            throw new Error('VALOR NAO PERMITIDO')
        }
        if (value > 100 || value < 0) {
            throw new Error('VELOCIDADE NAO PERMITIDA')
        }

        return this[_speed] = value
    }

    speedUp() { //ACELERAR
        if (this[_speed] >= 100) return
        this[_speed]++
    }

    break () {
        if (this[_speed] <= 0) return
        this[_speed]--
    }
}

const createCar = new Car('Ferrari')

for (let i = 0; i <= 100; i++) {
    createCar.speedUp()
}
// createCar.speed = 55 // ISTO É UM SETTER

// console.log(createCar.speed) // ISTO É UM GETTER

console.log(createCar)

class CreatePeople {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }

    get nameFull() {
        return `${this.name} ${this.lastname}`
    }
    set nameFull(value) {
        value = value.split(' ')
        this.name = value.shift()
        this.lastname = value.join(' ')
    }
}


const createPeople = new CreatePeople('Rafael', 'oliveira')
createPeople.nameFull = 'Obrigado Deus OLA RAFAEL'
console.log(createPeople.name)
console.log(createPeople.lastname)