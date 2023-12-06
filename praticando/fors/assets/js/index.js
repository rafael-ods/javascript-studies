const elementos = [{
        tag: 'p',
        texto: 'Frase1'
    },
    {
        tag: 'div',
        texto: 'Frase2'
    },
    {
        tag: 'footer',
        texto: 'Frase3'
    },
    {
        tag: 'section',
        texto: 'Frase4'
    },
]

const result = document.querySelector('.container')
const createDiv = document.createElement('div')
result.append(createDiv)


elementos.forEach((value) => {
    const {
        tag,
        texto
    } = value

    const createTag = document.createElement(tag)
    createDiv.appendChild(createTag).innerText = texto
})

// for (let index in elementos) {
//     const {
//         tag,
//         texto
//     } = elementos[index]

//     const createTag = document.createElement(tag)
//     createDiv.appendChild(createTag).innerText = texto
// }

// for (let value of elementos) {
//     const {
//         tag,
//         texto
//     } = value


//     const createTag = document.createElement(tag)
//     createDiv.appendChild(createTag).innerText = texto

// }

// for (let i = 0; i < elementos.length; i++) {
//     const {
//         tag,
//         texto
//     } = elementos[i]
//     const createTag = document.createElement(tag)
//     createDiv.appendChild(createTag).innerText = texto
// }