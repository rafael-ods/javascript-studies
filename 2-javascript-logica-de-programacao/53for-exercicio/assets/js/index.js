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

const getContainer = document.querySelector('.container')
const createDiv = document.createElement('div')
getContainer.appendChild(createDiv)

for (let i = 0; i < elementos.length; i++) {
    const {
        tag,
        texto
    } = elementos[i]
    const createTag = document.createElement(tag)
    createDiv.appendChild(createTag).innerHTML = texto
}

// elementos.forEach((obj) => {
//     const {
//         tag,
//         texto
//     } = obj

//     const createTag = document.createElement(tag)
//     createDiv.appendChild(createTag).innerHTML = texto
// })

// for (let {
//         tag,
//         texto
//     } of elementos) {

//     const createTag = document.createElement(tag)
//     createDiv.appendChild(createTag).innerHTML = texto
// }

// for (let key in elementos) {
//     const {
//         tag,
//         texto
//     } = elementos[key]

//     const createTag = document.createElement(tag)
//     createDiv.appendChild(createTag).innerHTML = texto
// }