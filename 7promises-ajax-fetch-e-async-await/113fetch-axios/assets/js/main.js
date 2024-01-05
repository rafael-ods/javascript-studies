fetch('pessoas.json')
  .then(response => {
    return response.json()

  }).then(json => {
    return pageLoad(json)
  }).catch(error => console.log(error))

// axios('pessoas.json').then(response => {
//   return pageLoad(response.data)
// })

function pageLoad(json) {
  const result = document.querySelector('.resultado')
  const table = document.createElement('table')
  json.forEach(obj => {

    const tr = document.createElement('tr')

    const td1 = document.createElement('td')
    td1.innerHTML = obj.nome
    tr.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerHTML = obj.idade
    tr.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerHTML = obj.email
    tr.appendChild(td3)

    table.appendChild(tr)
  });

  result.appendChild(table)
}