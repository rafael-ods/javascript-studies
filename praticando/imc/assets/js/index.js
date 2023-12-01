const form = document.querySelector('.form')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const weightInput = Number(e.target.querySelector('#weight').value)
    const heightInput = Number(e.target.querySelector('#height').value)

    if (!weightInput) return setResult('Digite um peso valido', false)
    if (!heightInput) return setResult('Digite uma alura valida', false)

    const imc = calImc(weightInput, heightInput)
    const setNivelImc = getNivelImc(imc)

    setResult(`${imc} ${setNivelImc}`, true)

})


const createParagraph = () => {
    const paragraph = document.createElement('p')
    return paragraph
}

const setResult = (msg, isValid) => {
    const result = document.querySelector('.result')
    result.innerHTML = ''
    const paragraph = createParagraph()
    paragraph.innerText = msg
    if (isValid) {
        paragraph.classList.add('paragraph-positive')
    } else {
        paragraph.classList.add('paragraph-negative')
    }
    result.appendChild(paragraph)
}

const calImc = (weight, height) => {
    const result = weight / (height * height)
    return result.toFixed(2)
}

const getNivelImc = (imc) => {
    const nivel = ['baixo peso', 'intervalo normal', 'sobrepeso', 'obesidade class 1', 'obesidade class 2', 'obesidade class 3']
    if (imc <= 18.5) return nivel[0]
    if (imc <= 24.9) return nivel[1]
    if (imc <= 29.9) return nivel[2]
    if (imc <= 34.9) return nivel[3]
    if (imc <= 39.9) return nivel[4]
    if (imc >= 40) return nivel[5]
}