class ValidateCpf {
  constructor(cpf) {
    Object.defineProperty(this, 'cpf', {
      enumerable: true,
      value: cpf.replace(/\D+/g, '') // UMA OPCAO DE NAO FAZER COM GET
    })
  }

  validate() {
    if (this.cpf === 'undefined') return false //VERIFICACAO SE O TIPO ENVIADO FOR IGUAL A UNDEFINED NOS RETORNARA FALSO
    if (typeof this.cpf !== 'string') return false
    if (this.cpf.length !== 11) return false
    const cpfPartial = this.cpf.slice(0, -2) // PEGANDO O CPF E DE 11 DIGITO E DIMINUINDO PARA 9
    if (this.inSequence()) return false

    const digitOne = this.createDigitsCpf(cpfPartial)
    const digitTwo = this.createDigitsCpf(cpfPartial + digitOne)

    const newCpf = cpfPartial + digitOne + digitTwo
    return newCpf === this.cpf
  }

  createDigitsCpf(cpfPartial) {
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

  inSequence() {
    const sequence = this.cpf[0].repeat(this.cpf.length) //FUNCAO ONDE PEGA O CPG E CONFERE SE ELE É UM CPF COM NUMEROS REPETIDOS
    return sequence === this.cpf

  }
}


// const cpf = new ValidateCpf('070.987.720-03')

// if (cpf.validate()) {
//   console.log(`CPF VALIDO: ${cpf.cpf}`)
// } else {
//   console.log(`CPF INVALIDO: ${cpf.cpf}`)
// }