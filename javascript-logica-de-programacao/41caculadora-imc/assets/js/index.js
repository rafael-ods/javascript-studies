const form = document.querySelector("#formulario")


form.addEventListener('submit', (e) => {
    //PREVENDO O COMPORTAMENTO DO FORMULARIO
    e.preventDefault()

    const weight = Number(e.target.querySelector('#peso').value)
    const height = Number(e.target.querySelector('#altura').value)

    if (!weight) {
        return setResult('Peso invalido, digite novamente', false)
    }
    if (!height) {
        return setResult('Altura invalido, digite novamente', false)
    }
    //VARIAVEIS CRIADAS PARA GUARDAR AS FUNCOES E PEGAR OS VALORES DAS CONST DS INPUT
    const imcResult = imc(weight, height)
    const nivelImcResult = nivelImc(imcResult)

    setResult(`Seu imc é: ${imcResult} ${nivelImcResult}`, true)
})


const createParagraph = () => {
    // CRIANDO UM PARAGRAFO EM HTML POR JAVASCRIPT
    const paragraph = document.createElement('p')
    return paragraph
}

const setResult = (msg, isValid) => {
    const result = document.querySelector('#resultado')
    result.innerHTML = ''
    // CRIANDO UM ESTILO NO CSS VIA JAVASCRIPT, 
    // LEMBRANDO QUE ESTA CLASSE TEM QUE EXITIR NA NOSSA FOLHA DE ESTILO 
    const paragraph = createParagraph()
    paragraph.innerHTML = msg
    if (isValid) {
        paragraph.classList.add('paragraph-positive')
    } else {
        paragraph.classList.add('paragraph-negative')
    }
    // ADICIONANDO UM ELEMENTO DENTRO DE OUTRO ELEMENTO
    result.appendChild(paragraph)
}

const imc = (weight, height) => {
    //FUNCAO DE CALCULAR O MASSA CORPORAL IMC
    return (weight / (height * height)).toFixed(2)
}

const nivelImc = (imc) => {
    //PODEMOS DECLARAR UM VARIAVEL DE NIVEIS E ATRIBUIR ELA UM ARRAY COM AS STRINGS E ACESSAR O NIVEL[0]
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc <= 18.5) return nivel[0]
    if (imc <= 29.9) return nivel[1]
    if (imc <= 34.9) return nivel[2]
    if (imc <= 39.9) return nivel[3]
    if (imc >= 40) return nivel[4]
}