const timer = document.querySelector('.time')

const getSeconds = (seconds) => {
    const date = new Date(seconds * 1000)

    const getHours = date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
    return getHours
}


let time
let counter = 0

const setTimer = () => {
    time = setInterval(() => {
        counter++
        timer.innerText = getSeconds(counter)
    }, 1000)
}


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('play')) {
        timer.classList.remove('stop-negative')
        setTimer()
    }
    if (e.target.classList.contains('stop')) {
        if (counter > 0 && timer.classList.add('stop-negative')) return
        clearInterval(time)

    }
    if (e.target.classList.contains('restart')) {
        timer.classList.remove('stop-negative')
        clearInterval(time)
        counter = 0
        timer.innerHTML = '00:00:00'
    }
})