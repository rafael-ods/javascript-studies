function Create() {
  const displayInput = document.querySelector('.display')
  const btnClear = document.querySelector('.btn-clear')
  const btnDelete = document.querySelector('.btn-del')
  const btnEqual = document.querySelector('.btn-eq')
  this.initial = () => {
    this.getClickBtn()
    this.getClickButtonKey()
  }

  this.setNumberDisplay = (value) => {
    displayInput.value = displayInput.value + value
  }

  this.setBtnClear = () => {
    displayInput.value = 0
  }

  this.setBtnDelete = () => {
    displayInput.value = displayInput.value.slice(0, -1)
  }

  this.setEqualResult = () => {
    let result = displayInput.value
    try {
      //EVAL NAO É UMA BOA PRATICA DE CODIGO PARA UMA CALCULADORA, MAIS RESOLVE ELE EFETUA AS CONTAS AUTOMATICAMENTE
      result = eval(result)
      if (!result) {
        alert('Conta inválida')
        return
      }
      displayInput.value = String(result)
    } catch (error) {
      alert('Conta inválida')
    }
  }

  this.getClickButtonKey = () => {
    displayInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.setEqualResult()
      }
    })
  }

  this.getClickBtn = () => {
    document.addEventListener('click', (e) => {
      const clickBtn = e.target
      if (clickBtn.classList.contains('btn-num')) {
        this.setNumberDisplay(clickBtn.innerText)
      }

      if (clickBtn === btnClear) {
        this.setBtnClear()
      }
      if (clickBtn === btnDelete) {
        this.setBtnDelete()
      }
      if (clickBtn === btnEqual) {
        this.setEqualResult()
      }
    })
  }

}

const calc = new Create()
calc.initial()