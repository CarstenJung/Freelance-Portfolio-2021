import jump from 'jump.js'

document.querySelector('.goBack').addEventListener('click', () => {
    jump('#scrollUP')
})

document.querySelector('.heroText').addEventListener('click', () => {
    jump('#portfolio')
})