class CalculatorImc {
    constructor() {
        this.form = document.querySelector('.form')
        this.weight = this.form.querySelector('.weight');
        this.height = this.form.querySelector('.height');
        this.event()
    }

    event() {
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.checkInputValue()
        this.setResult()
        this.setNivel()
    }

    checkInputValue() {
        let valid = true

        for (let errorText of this.form.querySelectorAll('.paragraph-negative')) {
            errorText.remove()
        }

        const inputValid = this.form.querySelectorAll('.valid')
        inputValid.forEach(input => {
            const label = input.previousElementSibling.innerHTML
            if (!input.value) {
                valid = false
                this.createError(input, `O campo ${label} esta em branco`)
            }

            if (isNaN(input.value) || !isFinite(input.value)) {
                valid = false
                this.createError(input, `O Campo ${label} so aceita numero`)
            }

        });



        return valid
    }

    createDiv() {
        const div = document.createElement('div')
        return div
    }

    createError(input, msg) {
        const div = this.createDiv()
        div.innerHTML = msg
        div.classList.add('paragraph-negative')
        input.insertAdjacentElement('afterend', div)
    }


    setImc = (weight, height) => {
        const result = weight / (height * height)
        return result.toFixed(2)

    }

    setNivel(imc) {
        const nivel = ['baixo peso', 'intervalo normal', 'sobrepeso', 'obesidade class 1', 'obesidade class 2', 'obesidade class 3']
        if (imc <= 18.5) return nivel[0]
        if (imc <= 24.9) return nivel[1]
        if (imc <= 29.9) return nivel[2]
        if (imc <= 34.9) return nivel[3]
        if (imc <= 39.9) return nivel[4]
        if (imc >= 40) return nivel[5]
    }

    setResult() {
        this.weight = Number(this.form.querySelector('.weight').value)
        this.height = Number(this.form.querySelector('.height').value)

        if (!this.weight) {
            return
        }
        if (!this.height) {
            return
        }


        const imc = this.setImc(this.weight, this.height)
        const getNivelImc = this.setNivel(imc)


        return this.setConcatResult(`${imc} ${getNivelImc}`)

    }

    setConcatResult(msg) {
        const getResult = this.form.querySelector('.result')
        getResult.innerHTML = msg
        getResult.classList.add('paragraph-positive')
    }


}





const calculatorImc = new CalculatorImc()