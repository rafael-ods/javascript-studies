const number = Number(prompt('Digite seu numero: '))

const numberText = document.getElementById('number-text').innerHTML = number
const text = document.getElementById('text')

text.innerHTML = ''

text.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(number)} <p/>`
text.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)} <p/>`
text.innerHTML += `<p>É NaN: ${Number.isNaN(number)} <p/>`
text.innerHTML += `<p>Arredonda para baixo: ${Math.floor(number)}<p/>`
text.innerHTML += `<p>Arredonda para cima: ${Math.ceil(number)}<p/>`
text.innerHTML += `<p>Com duas casas decimais: ${Math.ceil(number).toFixed(2)} <p/>`