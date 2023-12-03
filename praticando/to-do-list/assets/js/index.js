const inputText = document.querySelector('.input-text')
const btn = document.querySelector('.btn')
const listTask = document.querySelector('.list')


const createLi = () => {
    const li = document.createElement('li')
    return li
}


const createTaks = (task) => {
    const create = createLi(task)
    listTask.appendChild(create).innerText = task
    createButtonAddToTask(create)
    salveTask()
}

btn.addEventListener('click', (e) => {
    if (!inputText.value) return
    createTaks(inputText.value)
    resetInput()

})

inputText.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputText.value) return
        createTaks(inputText.value)
        resetInput()

    }
})

const resetInput = () => {
    inputText.value = ''
    inputText.focus()
}

const createButtonAddToTask = (task) => {
    task.innerText += ' '
    const button = document.createElement('button')
    button.innerText = 'Apagar'
    button.setAttribute('class', 'btn-delete-task')
    task.appendChild(button)
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete-task')) {
        e.target.parentElement.remove()
        salveTask()

    }
})

const salveTask = () => {
    const getItemList = listTask.querySelectorAll('li')
    const listArray = []

    getItemList.forEach((value) => {
        let getNameText = value.innerText

        getNameText = getNameText.replace('Apagar', '').trim()
        listArray.push(getNameText)
    })

    const setArray = JSON.stringify(listArray)

    localStorage.setItem('studies', setArray)
    console.log(setArray)
}

const getTaskSalve = () => {
    const getListArrayTask = localStorage.getItem('studies')

    const getList = JSON.parse(getListArrayTask)

    getList.forEach((value) => {
        createTaks(value)
    })
}


getTaskSalve()