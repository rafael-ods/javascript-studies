const form = document.querySelector('.form')
const getResult = document.querySelector('.result')

const inputName = document.querySelector('#name')
const inputLastname = document.querySelector('#lastname')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const arrayForm = []


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = inputName.value
    const lastname = inputLastname.value
    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)


    if (!name) return setResult('Digite um nome válido', false)
    if (!lastname) return setResult('Digite um sobrenome válido', false)
    if (!weight) return setResult('Digite um peso válido', false)
    if (!height) return setResult('Digite um altura válido', false)

    const getImc = imc(weight, height)
    const getNivelImc = nivelImc(getImc)
    setResult('Formulario enviado com sucesso!', true)

    const createObject = {
        name,
        lastname,
        weight,
        height
    }

    resetInput()

    arrayForm.push(createObject)
    getResult.innerHTML += `<p>Nome: ${name}</p>`
    getResult.innerHTML += `<p>Sobrenome: ${lastname}</p>`
    getResult.innerHTML += `<p>Seu IMC é: ${getImc} ${getNivelImc}</p>`
})

const createParagraph = () => {
    const paragraph = document.createElement('p')
    return paragraph
}

const setResult = (msg, isValid) => {
    const getResult = document.querySelector('.result')
    getResult.innerHTML = ''
    const paragraph = createParagraph()
    if (isValid) {
        paragraph.classList.add('paragraph')

    } else {
        paragraph.classList.add('paragraph-negative')

    }
    paragraph.innerHTML += msg
    getResult.appendChild(paragraph)
}

const imc = (weight, height) => {
    const result = weight / (height * height)
    return result.toFixed(2)
}

const resetInput = () => {
    inputName.value = ''
    inputLastname.value = ''
    inputWeight.value = ''
    inputHeight.value = ''
    inputName.focus()
}


const nivelImc = (imc) => {
    const nivel = ['baixo peso', 'intervalo normal', 'sobrepeso', 'obesidade class 1', 'obesidade class 2', 'obesidade class 3']
    if (imc <= 18.5) return nivel[0]
    if (imc <= 24.9) return nivel[1]
    if (imc <= 29.9) return nivel[2]
    if (imc <= 34.9) return nivel[3]
    if (imc <= 39.9) return nivel[4]
    if (imc >= 40) return nivel[5]
}

nivelImc(10)