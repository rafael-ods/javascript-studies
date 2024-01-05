// fetch('pagina1.html').then(res => { // POR PADRAO JS ELA JA NOS RETORNA UMA PROMISE, DENTRO E DENTRO DELA PASSAMOS O CAMINHO DE API URL OU ATE DE UM ARQUIVO HTML
//   if (res.status !== 200) {
//     throw new Error('Pagina nao encontrada 404')
//   }
//   return res.text() // TEXT NOS RETORNA UMA PROMISE
// }).then(res => {
//   console.log(res)
// })


document.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    e.preventDefault()
    pageLoading(e.target)
  }
})

async function pageLoading(e) {
  try {
    const href = e.getAttribute('href');

    const response = await fetch(href)

    if (response.status !== 200) {
      throw new Error('Pagina nao encontrada 404')
    }

    const html = await response.text()
    resultMsg(html)
  } catch (error) {
    console.warn(error)
  }
}


const resultMsg = (msg) => {
  const getResult = document.querySelector('.resultado')
  getResult.innerHTML = msg
}