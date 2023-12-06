// REVISANDO DENTRO DE UM OBJETO TEMOS KEY E VALUE EX: NAME: "Rafael"
//OBJETO DE FORMA LITERAL
const object = {
    name: 'Rafael',
    lastname: 'Oliveira'
}

// //PODEMOS PEGAR O VALOR DINAMICO DE UMA PROPRIEDADE APENAS COM ANOTAÇÃO DE [] 
// const props = 'lastname'
// console.log(object[props])

// console.log(object.name) // ACESSAMOS UM OBJETO COM ANOTACAO DE PONTO 
// console.log(object['name']) // PODEMOS FAZER DESTA FORMA AQUI TBM COM [] E PASSANDO O VALOR DA PROPRIEDADE DO OBJETO

// OBJETO DE FORMA CONSTRUTORA
const object1 = new Object()
object1.name = 'Celso'
object1.lastname = 'Lino'
object1.years = 31
object1.getTalkHi = function () {
    return `${this.name} OI`
}
object1.getYearsBirth = function () {
    const date = new Date()
    const getYears = date.getFullYear()
    return (`Seu ano de nascimento foi ${getYears - this.years}`)
}

// // delete object1.name //APAGANDO UMA PROPRIEDADE DE UM OBJETO
console.log(object1.getTalkHi())
console.log(object1.getYearsBirth())

for (let key in object1) { // PODEMOS ITERAR SOBRE UM OBJETO USANDO OFR IN
    console.log(object1[key]) // PASSAMOS A KEY QUE O FOR IN ELE PEGA O INDEX E LOG APOS FAZEMOS ANOTAÇÃO DE[] EX OBJECT[KEY]
}