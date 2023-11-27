const result = document.querySelector('h1')

const date = new Date()
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const getDate = date.toLocaleTimeString('pt-BR', options).replace('às', '')

result.innerHTML = ''
result.innerHTML += `${getDate}`


// const dayweek = (day) => {
//     const dayName = ['Domingo', 'Segunda-Feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feria', 'Sabado']
//     switch (day) {
//         case 0:
//             return dayName[0]
//         case 1:
//             return dayName[1]
//         case 2:
//             return dayName[2]
//         case 3:
//             return dayName[3]
//         case 4:
//             return dayName[4]
//         case 5:
//             return dayName[5]
//         default:
//             return 'Dia ñ encontrado'
//     }
// }

// const dayMonth = (month) => {
//     const monthName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
//     switch (month) {
//         case 0:
//             return monthName[0]
//         case 1:
//             return monthName[1]
//         case 2:
//             return monthName[2]
//         case 3:
//             return monthName[3]
//         case 4:
//             return monthName[4]
//         case 5:
//             return monthName[5]
//         case 6:
//             return monthName[6]
//         case 7:
//             return monthName[7]
//         case 8:
//             return monthName[8]
//         case 9:
//             return monthName[9]
//         case 10:
//             return monthName[10]
//         case 11:
//             return monthName[11]
//         default:
//             return 'Dia ñ encontrado'
//     }
// }

// const formatHours = (num) => {
//     return num >= 10 ? num : `0${num}`
// }

// const getDate = () => {
//     const date = new Date()
//     const getDay = date.getDay()
//     const getDate = date.getDate()
//     const getMonth = date.getMonth()
//     const getYear = date.getFullYear()
//     const getHours = formatHours(date.getHours())
//     const getMinutes = formatHours(date.getMinutes())
//     const getSeconds = formatHours(date.getSeconds())

//     result.innerHTML = ''
//     return result.innerHTML += `${dayweek(getDay)}, ${getDate} de ${dayMonth(getMonth)} de ${getYear} ${getHours}:${getMinutes}:${getSeconds}`
// }

// getDate()