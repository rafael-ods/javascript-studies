const inputTask = document.querySelector('.input-tarefa')
const btnTask = document.querySelector('.btn-tarefa')
const listTask = document.querySelector('.tarefas')

const createItemList = () => {
  const li = document.createElement('li')
  return li
}

const createTask = (task) => {
  //FUNCAO PARA CRIAR UMA TAREFA
  const create = createItemList(task)
  listTask.appendChild(create).innerHTML = task
  createButton(create)
  salveTask()
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
  //RESETANDO OO VALOR DO INPUT
  inputTask.value = ''
  inputTask.focus() // FUNCAO QUE INDICA QUE O INPUT FICAR SELECIONADO
}

const createButton = (task) => {
  //FUNCAO DE CRIAR BUTTON
  task.innerText += ' '
  const button = document.createElement('button')
  button.innerText = 'Apagar'
  // PODIAMOS USAR CLASSLIST.ADD()
  // FUNCAO DE ATRIBUIR EX: PRIMEIRO PARAMETRO CLASS, ID E SEGUNDO O NOME REALMENTE DO SELETORES
  button.setAttribute('class', 'deletar')
  button.setAttribute('title', 'Botão de deletar tarefas')
  task.appendChild(button)
}

document.addEventListener('click', (e) => {
  // FUNCAO DE DELETAR AS LI AO CLICAR NO BUTTON
  const buttonDelete = e.target
  if (buttonDelete.classList.contains('deletar')) {
    //PARENT ELEMENT INDICA O PAI DO ELEMENTO EM QUESTAO, OU SEJA ESTAMOS COM O BUTTON DENTRO DAS LI ENTAO TEMOS QUE REMOVER POR INTEIRO TANTO O BUTTON TANTO O LI
    buttonDelete.parentElement.remove()


    // TEMOS QUE CHAMAR A FUNCAO DE SALVAR TASK AQUI TBM EM DELETAR O BUTTON PARA PODER ATUALIZAR O LOCAL STORAGE
    salveTask()

  }
})

const salveTask = () => {
  const getItemList = listTask.querySelectorAll('li')
  const listArray = []

  getItemList.forEach((value) => {
    //ESTOU PEGANDO O VALOR DO TEXTO COM O FOR 
    let getTextName = value.innerText
    //REMOVENDO O BUTTON E SUBSTITUINDO PER UMA STRING VAZIA, E A FUNCAO TRIM REMOVE OS ESPAÇO EM BRANCOS QUE NAO ESTOU SENDO UTILIZADOS
    getTextName = getTextName.replace('Apagar', '').trim()
    listArray.push(getTextName)
  })

  // JSON.stringify CONVERTE O OBJETO JSON EM UMA STRING
  const listArrayJson = JSON.stringify(listArray)
  //LOCAL STORAGE PODEMOS DEIXAR AMARZENADO EM MEMORIA NO BROWSER AS INFOMAÇOES, PRIMEIRO PARAMETRO É A KEY E O SEGUNDO É A NOSSA LISTA
  localStorage.setItem('studies', listArrayJson)
}


const getListArrayTask = () => {
  const getTaks = localStorage.getItem('studies')
  //JSON.parse CONVERTE UMA LISTA DE STING EM UM ARRAY OU OBJETO
  const listToArray = JSON.parse(getTaks)
  //APOS CONVERTER NOVAMENTE EM UM ARRAY CHAMO A FUNCAO DE CRIAR TASK E PASSO O VALOR 
  listToArray.forEach((value) => {
    createTask(value)
  })
}

getListArrayTask()