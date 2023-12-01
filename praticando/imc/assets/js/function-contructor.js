function Create() {
    const form = document.querySelector('.form')
    const weightInput = document.querySelector('#weight')
    const heightInput = document.querySelector('#height')

    this.initial = () => {
        this.formSubmit()
    }

    this.formSubmit = () => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const weight = Number(weightInput.value)
            const height = Number(heightInput.value)

            if (!weight) return this.setResult('Peso invalido', false)
            if (!height) return this.setResult('Altura invalido', false)

            const getImc = this.setImc(weight, height)
            const getNivelImc = this.getNivelImc(getImc)

            this.resetInput()
            this.setResult(`${getImc} ${getNivelImc}`, true)
        })
    }

    this.resetInput = () => {
        weightInput.value = ''
        heightInput.value = ''
        weightInput.focus()
    }

    this.createParagraph = () => {
        const paragraph = document.createElement('p')
        return paragraph
    }

    this.setResult = (msg, isValid) => {
        const result = document.querySelector('.result')
        result.innerHTML = ''
        const paragraph = this.createParagraph()
        if (isValid) {
            paragraph.classList.add('paragraph-positive')
        } else {
            paragraph.classList.add('paragraph-negative')

        }
        paragraph.innerText = msg
        result.appendChild(paragraph)
    }

    this.setImc = (weight, height) => {
        const result = weight / (height * height)
        return result.toFixed(2)
    }

    this.getNivelImc = (imc) => {
        const nivel = ['baixo peso', 'intervalo normal', 'sobrepeso', 'obesidade class 1', 'obesidade class 2', 'obesidade class 3']
        if (imc <= 18.5) return nivel[0]
        if (imc <= 24.9) return nivel[1]
        if (imc <= 29.9) return nivel[2]
        if (imc <= 34.9) return nivel[3]
        if (imc <= 39.9) return nivel[4]
        if (imc >= 40) return nivel[5]
    }

}

const calc = new Create()
calc.initial()