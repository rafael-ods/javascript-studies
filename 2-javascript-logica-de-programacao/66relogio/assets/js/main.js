const paragraphTime = document.querySelector('.relogio')
// const btnGo = document.querySelector('.iniciar')
// const btnStop = document.querySelector('.pausar')
// const btnRestart = document.querySelector('.zerar')


const gethoursInSeconds = (seconds) => {
    // Cria um novo objeto Date com base no número de segundos fornecido, multiplicando por 1000 para converter para milissegundos.
    const data = new Date(seconds * 1000);

    // Converte o objeto Date para uma string de tempo formatada de acordo com a localidade 'pt-BR'.
    const getHours = data.toLocaleTimeString('pt-BR', {
        hour12: false, // Define para usar o formato de 24 horas, sem AM/PM.
        timeZone: 'UTC' // Define o fuso horário como UTC para garantir a precisão do cálculo.
    });

    // Retorna a string de tempo formatada.
    return getHours;
};

let time;
let counter = 0

const resultHours = () => {
    time = setInterval(() => {
        counter++
        paragraphTime.innerHTML = gethoursInSeconds(counter)
    }, 1000);
}

document.addEventListener('click', (e) => { //ESTAMOS PEGANDO E EVENTO TARGET DO DOCUMENTO DO OBJETO Windows 
    const clickButtons = e.target

    if (clickButtons.classList.contains('iniciar')) {
        paragraphTime.classList.remove('pausado')
        resultHours()
    }

    if (clickButtons.classList.contains('pausar')) {
        paragraphTime.classList.add('pausado')
        clearTimeout(time)
    }

    if (clickButtons.classList.contains('zerar')) {
        clearTimeout(time)
        paragraphTime.classList.remove('pausado')
        counter = 0
        paragraphTime.innerHTML = '00:00:00'
    }
})

// btnGo.addEventListener('click', () => {
//     paragraphTime.classList.remove('pausado')
//     resultHours()
// })

// btnStop.addEventListener('click', () => {
//     paragraphTime.classList.add('pausado')
//     clearTimeout(time)
// })

// btnRestart.addEventListener('click', () => {
//     clearTimeout(time)
//     paragraphTime.classList.remove('pausado')
//     counter = 0
//     paragraphTime.innerHTML = '00:00:00'

// })