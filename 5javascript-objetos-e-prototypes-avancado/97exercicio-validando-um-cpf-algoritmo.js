// const cpf = '705.484.450-52'

// const formatCpf = cpf.replace(/\D/g, '') //REGEX DE REMOVER TODAS AS CARACTERES NAO NUMERICOS DE UMA STRING
// const arrayToCpf = Array.from(formatCpf).reduce((counter, value) => {
//     const result = counter += Number(value)
//     return result
// }, 0) // Este método é útil para transformar algo que parece um array em um array real, permitindo que métodos de array sejam aplicados a ele.

// console.log(arrayToCpf)

function ValidateCpf(cpf) {
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        get: () => {
            return cpf.replace(/\D+/g, '')
        }
    })
}

ValidateCpf.prototype.validate = function () { // METODO DE VERFICACAO ONDE VAMOS VALIDAR SE O CPF É TRUE OU FALSE 
    if (typeof this.cpf === 'undefined') return false //VERIFICACAO SE O TIPO ENVIADO FOR IGUAL A UNDEFINED NOS RETORNARA FALSO
    if (this.cpf.length !== 11) return false // VERIFICACAO DE QUANTIDADE DE CARACTERES DO CPF, SE FOR DIFERENTE DE 11 NOS RETORNA FALSE
    if (this.inSequence()) return false
    const cpfPartial = this.cpf.slice(0, -2) // PEGANDO O CPF E DE 11 DIGITO E DIMINUINDO PARA 9
    const digitOne = this.createDigitsCpf(cpfPartial)
    const digitTwo = this.createDigitsCpf(cpfPartial + digitOne)

    const newCpf = cpfPartial + digitOne + digitTwo
    return newCpf === this.cpf
}

ValidateCpf.prototype.createDigitsCpf = function (cpfPartial) {
    const arrayToCpf = Array.from(cpfPartial) // TRANSFORMANDO O CPF EM UM ARRAY
    let regressive = arrayToCpf.length + 1 // ADICIONANDO UM CONTADOR DO TAMANHO DO ARRAY + 1 QUE NO CASO DARIA 10
    const total = arrayToCpf.reduce((counter, value) => {
        counter += (regressive * Number(value))
        regressive--
        return counter
    }, 0)

    const digit = 11 - (total % 11)

    return digit > 9 ? "0" : String(digit) // FORÇANDO QUE O RETORNO SERA UMA STRING
}

ValidateCpf.prototype.inSequence = function () {
    const sequence = this.cpf[0].repeat(this.cpf.length) //FUNCAO ONDE PEGA O CPG E CONFERE SE ELE É UM CPF COM NUMEROS REPETIDOS
    return sequence === this.cpf
}

const cpf = new ValidateCpf('070.987.720-03')


if (cpf.validate()) {
    console.log(`CPF VALIDO: ${cpf.cpf}`)
} else {
    console.log(`CPF INVALIDO: ${cpf.cpf}`)
}