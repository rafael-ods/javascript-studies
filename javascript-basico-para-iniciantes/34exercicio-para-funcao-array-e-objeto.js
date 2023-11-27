const form = document.querySelector('.form')
const result = document.querySelector('.result')


const registerPeople = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameInput = e.target.querySelector('#name').value
    const lastnameInput = e.target.querySelector('#lastname').value
    const weightInput = Number(e.target.querySelector('#weight').value).toFixed(2)
    const heightInput = Number(e.target.querySelector('#height').value).toFixed(2)

    const registerObject = {
        nameInput, //JS JA ENTENDE QUE NAO PRECISO PASSAR nameInput: nameInput
        lastnameInput,
        weightInput,
        heightInput
    }

    registerPeople.push(registerObject)
    console.log(registerPeople)

    result.innerHTML += `<p>Nome: ${nameInput}</p>`
    result.innerHTML += `<p>Sobrenome: ${lastnameInput}</p>`
    result.innerHTML += `<p>Peso: ${weightInput}</p>`
    result.innerHTML += `<p>Altura: ${heightInput}</p>`
})