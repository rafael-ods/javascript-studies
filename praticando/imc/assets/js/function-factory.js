function calcImc() {
    return {
        form: document.querySelector('.form'),
        setResult: document.querySelector('.result'),
        weightInput: document.querySelector('#weight'),
        heightInput: document.querySelector('#height'),

        initial() {
            this.formSubmit()
        },

        formSubmit() {
            this.form.addEventListener('submit', (e) => {
                e.preventDefault()
                const weightInput = Number(e.target.querySelector('#weight').value)
                const heightInput = Number(e.target.querySelector('#height').value)

                const imc = this.setImc(weightInput, heightInput)
                const setNivelImc = this.getNivelImc(imc)

                if (!weightInput) return this.result('Peso invalido', false)
                if (!heightInput) return this.result('Altura invalida', false)

                this.resetInput()
                this.result(`${imc} ${setNivelImc}`, true)
            })
        },

        resetInput() {
            this.weightInput.value = ''
            this.heightInput.value = ''
            this.weightInput.focus()
        },

        createParagraph() {
            const paragraph = document.createElement('p')
            return paragraph
        },

        result(msg, isValid) {
            this.setResult.innerHTML = ''
            const paragraph = this.createParagraph()
            paragraph.innerText = msg
            if (isValid) {
                paragraph.classList.add('paragraph-positive')
            } else {
                paragraph.classList.add('paragraph-negative')
            }
            this.setResult.appendChild(paragraph)
        },

        setImc(weight, height) {
            const result = weight / (height * height)
            return result.toFixed(2)
        },

        getNivelImc(imc) {
            const nivel = ['baixo peso', 'intervalo normal', 'sobrepeso', 'obesidade class 1', 'obesidade class 2', 'obesidade class 3']
            if (imc <= 18.5) return nivel[0]
            if (imc <= 24.9) return nivel[1]
            if (imc <= 29.9) return nivel[2]
            if (imc <= 34.9) return nivel[3]
            if (imc <= 39.9) return nivel[4]
            if (imc >= 40) return nivel[5]
        }

    }
}

const cal = calcImc()
cal.initial()
cal.resetInput()