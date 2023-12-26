class ValidForm {
  constructor() {
    this.form = document.querySelector('.formulario')
    this.event()
  }

  event() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e) // E PASSAMOS AQUI O METODO CRIADO DE HANDLE SUBMIT
    })
  }

  handleSubmit(e) { // CRIAMOS UMA METODO/FUNCAO ONDE PEGAMOS O EVENTO DE PREVENT DEFAULT 
    e.preventDefault()
    const inputValid = this.checkInputvalue()
    const passwordValid = this.checkInputPassword()

    if (inputValid && passwordValid) {
      alert('Formulario Enviado  com sucesso')
    }
  }

  checkInputvalue() {
    let valid = true; // ESTOU COLOCANDO UMA FLAG QUE INDICO QUE OS INPUT JA SAO VALIDOS


    for (let errorText of this.form.querySelectorAll('.error-text')) { // ESTAMOS PEGANDO TODAS AS CLASS ERRO-TEXT E FOR REMOVENDO, ISTO IMPEDE QUE VARIOS ERROS SAO ENVIADO NO MESMO INPUT
      errorText.remove()
    }

    const inputValid = document.querySelectorAll('.validar')
    inputValid.forEach((input) => {
      const label = input.previousElementSibling.innerHTML //é uma propriedade do DOM (Modelo de Objeto de Documento) em JavaScript que retorna o elemento irmão anterior (anterior no mesmo nível hierárquico) de um elemento HTML.

      //CHECK EM TODOS OS INPUT SE ESTAO EM BRANCOS
      if (!input.value) {
        this.createError(input, `Camopo ${label} não pode estar em branco`)
        valid = false
      }

      if (input.classList.contains('cpf')) {
        if (!this.ValidateCpf(input)) valid = false
      }
      if (input.classList.contains('usuario')) {
        if (!this.validUser(input)) valid = false
      }


      // this.resetForm(input)
    })

    return valid;

  }

  checkInputPassword() {
    let valid = true; // ESTOU COLOCANDO UMA FLAG QUE INDICO QUE OS INPUT JA SAO VALIDOS

    const inputPassword = this.form.querySelector('.senha')
    const inputPasswordConfirm = this.form.querySelector('.repetir-senha')

    if (inputPassword.value !== inputPasswordConfirm.value) {
      this.createError(inputPassword, 'Campos Senha e Repetir Senha precisam ser iguais')
      this.createError(inputPasswordConfirm, 'Campos Senha e Repetir Senha precisam ser iguais')
      valid = false
    }
    if (inputPassword.value.length < 6 || inputPassword.value.length > 12) {
      valid = false
      this.createError(inputPassword, 'Senha precisa ter entre 6 e 12 caracteres')
    }

    return valid;
  }

  ValidateCpf(input) { //ESTAMOS PEGANDO A FUNCAO DE CLASS DO OUTRO ARQUIVO JS

    //ESTAMOS INSTANCIANDO A FUNCAO MODELO
    const cpf = new ValidateCpf(input.value) // ESTAMOS PEGANDO O VALOR DO INPUT

    //E ATRAVES DA INSTANCIA E ANOTACAO DE PONTO ESTAMOS ACESSANDO O METODO VALIDATE DENTRO DA FUNCAO MODELO CPF
    if (!cpf.validate()) {
      this.createError(input, 'Cpf INVALIDO')
      return false
    }
    return true
  }

  createError(input, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    input.insertAdjacentElement('afterend', div) //METODO/FUNCAO QUE INDICA QUE O ERRO LOGO QND OCORRE A CADA INPUT, PASSAMOS O AFTEREND, E DEPOIS A DIV QUE ESTAMOS CRIANDO
  }


  validUser(input) {
    let valid = true; // ESTOU COLOCANDO UMA FLAG QUE INDICO QUE OS INPUT JA SAO VALIDOS
    if (input.value.length < 3 || input.value.length > 12) {
      this.createError(input, 'Usuário deverá ter entre 3 e 12 caracteres')
      valid = false
    }
    if (!input.value.match(/^[a-zA-Z0-9]+$/)) { //Essa expressão regular garante que o usuário só pode conter letras (maiúsculas ou minúsculas) e/ou números. Se houver qualquer outro caractere que não seja uma letra ou número na string do usuário, a expressão regular não fará correspondência.
      this.createError(input, 'Usuário só poderá conter letras e/ou números')
      valid = false
    }
    return valid
  }



  resetForm(input) {
    input.value = ''
  }

}


const valid = new ValidForm()