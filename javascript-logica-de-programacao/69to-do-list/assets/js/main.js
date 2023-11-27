const inputTask = document.querySelector('.input-tarefa')
const btnTask = document.querySelector('.btn-tarefa')
const listTask = document.querySelector('.tarefas')
console.log(listTask)


const createItemList = () => {
  const li = document.createElement('li')
  return li
}

const createTask = (task) => {
  //FUNCAO PARA CRIAR UMA TAREFA
  const create = createItemList(task)
  listTask.appendChild(create).innerHTML = task
}

inputTask.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!inputTask.value) return
    createTask(inputTask.value)
    resetInput()

  }

})

btnTask.addEventListener('click', (e) => {
  // GUARDA O VALOR DO INPUT.VALUE
  if (!inputTask.value) return
  //ESTOU CHAMANDO A FUNCAO DE CRIAR TASK E PASSANDO O VALOR DO INPUT
  createTask(inputTask.value)
  resetInput()

})

const resetInput = (e) => {
  inputTask.value = ''
}