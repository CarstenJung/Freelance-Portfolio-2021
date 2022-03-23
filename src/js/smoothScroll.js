import jump from 'jump.js'

document.querySelector('.goBack').addEventListener('click', () => {
    jump('#scrollUP')
})

document.querySelector('.heroText a').addEventListener('click', () => {
    jump('#portfolio')
})