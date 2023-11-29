// Funções fábrica (Factory Functions) NADA MAIS É DO QUE FUNCOES QUE RETORNA OBJETOS

const createPeople = (name, lastname, years, weight, height) => {
    return {
        name,
        lastname,
        years,
        height,
        weight,
        get nameComplete() {
            return `${this.name} ${this.lastname}`
        },
        set nameComplete(value) { // CONSEGUIMOS SETAR UM NOVO VALOR A FUNCAO NAME COMPLETE ATRAVES DA PALAVRA SET
            value = value.split(' ')
            this.name = value.shift() + ' ' + value.shift()
            this.lastname = value.join(' ')
        },
        talkName(studies) {
            return `${studies}`
        },
        //GETTER É INDICAR QUE TRANSFORMAREMOS ALGO QUE NAO SEJA ATRIBUTO DE UM OBJETO EM UM ATRIBUTO COM A PALAVRA GET
        get imcCalc() {
            const result = this.weight / (this.height * this.height) // PALAVRA RESERVADA QUE ESTAMOS ATRIBUINDO AO OBJETO EM USO PARA ACESSO DAS SUAS PROPRIEDADES
            return result.toFixed(2)
        }
    }
}

const peopleOne = createPeople('Rafael', 'Oliveira', 30, 68, 1.68)
peopleOne.nameComplete = 'Maria Eva oliveira da Silva'
console.log(peopleOne.name)
console.log(peopleOne.lastname)

console.log(peopleOne.talkName(`${peopleOne.name} ${peopleOne.lastname} ${peopleOne.years} esta estudando JS`))

console.log(peopleOne.imcCalc) // NESTA LINHA INCLUIMOS A PALAVRA GET NA FRENTE DA FUNCAO ICM E ELA SE TORNOU UM ATRIBUTO DO OBJETO NOS RETORNANDO O VALOR DA FUNCAO E O MAIS IMPORTANTE QUE MUDAMOS A CHAMADA DE ANOTAÇÃO DE PONTO E EXECUTANDO A FUNCAO, E APENAS FICOU COMO ANOTACAO DE PONTO


// console.log(peopleOne.imcCalc()) // NOTA SE QUE ESTAMOS CHAMANDO A FUNCAO IMC ATRAVES DA ANOTAÇÃO DE PONTO E EXECUTANDO A FUNCAO COM ()