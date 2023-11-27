const getParagraph = document.querySelectorAll('.paragraph ~ p')

const getStyleBody = getComputedStyle(document.body) // GET COMPUTED STYLE É UM FUNCAO QUE PEGA TODOS OS ESTILOS DE UMA DETERMINADA AREA DO DOM
const getBackgroundBody = getStyleBody.backgroundColor


const getStyleBoxResult = getComputedStyle(document.querySelector('.container'))
const getBackgroundBoxResult = getStyleBoxResult.backgroundColor

for (value of getParagraph) {
    value.style.backgroundColor = getBackgroundBody
    value.style.color = getBackgroundBoxResult
}


// for (let i in getParagraph) {
//     getParagraph[i].style.backgroundColor = getBackgroundBody
//     getParagraph[i].style.color = getBackgroundBoxResult
// }

// getParagraph.forEach((value) => {
//     value.style.backgroundColor = getBackgroundBody
//     value.style.color = getBackgroundBoxResult
// })

// for (let i = 0; i < getParagraph.length; i++) {
//     getParagraph[i].style.backgroundColor = getBackgroundBody
//     getParagraph[i].style.color = getBackgroundBoxResult
// }