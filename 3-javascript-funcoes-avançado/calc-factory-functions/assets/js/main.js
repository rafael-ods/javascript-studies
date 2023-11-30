function createCalc() {
  return {
    displayInput: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDelete: document.querySelector('.btn-del'),
    btnEqual: document.querySelector('.btn-eq'),

    initial() {
      this.getClickBtn()
      calc.getClickButtonKey()
    },

    setNumberDisplay(value) {
      //ESTAMOS PASSANDO UM VALOR PARA PEGAR NO.TARGET DOS BOTOES
      this.displayInput.value += value
    },

    setBtnClear() {
      //ESTOU SETANDD O VALOR PARA 0
      this.displayInput.value = 0
    },

    setBtnDelete() {
      //ESTOU APAGANDO O ULTIMO VALOR DO INPUT
      this.displayInput.value = this.displayInput.value.slice(0, -1)
    },

    setEqualResult() {
      let result = this.displayInput.value
      try {
        result = eval(result)
        if (!result) {
          alert('Conta invalida')
          return
        }
        this.displayInput.value = String(result)
      } catch (error) {
        alert('Conta invalida')
      }

    },

    getClickButtonKey() {
      this.displayInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.setEqualResult()
        }
      })
    },

    getClickBtn() {
      document.addEventListener('click', (e) => {
        //THIS DENTRO DESTA FUNCAO NAO ESTA SENDO REFERENCIADO A CALCULADORA E SIM AO DOCUMENT E AO USAR UMA ARROW FUNCTION ISTO É RESOLVIDO
        //CASO USE UMA FUNCTION PADRAO NO FINAL DA SUA ESTRUTURA TEMOS QUE FAZER UM .BIND(THIS) ISTO INDICARA QUE NAO SERA MAIS REFERENCIADO AO DOCUMENT E SIM A FUNCAO PAI
        const clickBtn = e.target
        if (clickBtn.classList.contains('btn-num')) {
          //ESTAMOS PEGANDO APENAS O CONTEUDO DE TEXTO DO BOTAO E NAO A SUA TAG (HTML)
          this.setNumberDisplay(clickBtn.innerText)
        }
        if (clickBtn === this.btnClear) {
          this.setBtnClear()
        }
        if (clickBtn === this.btnDelete) {
          this.setBtnDelete()
        }
        if (clickBtn === this.btnEqual) {
          this.setEqualResult()
        }
      })
    },

  }
}

const calc = createCalc()
calc.initial()