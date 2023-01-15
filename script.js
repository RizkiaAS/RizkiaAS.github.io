const navToggleButton = document.getElementsByClassName('nav-toggle')[0]
const navMobile = document.getElementsByClassName('nav-mobile')[0]

let isOpen = false
navToggleButton.addEventListener('click', () => {
    isOpen = !isOpen
    isOpen 
    ? navToggleButton.innerText = 'close' 
    : navToggleButton.innerText = 'menu'

    isOpen & navMobile.classList.toggle('closed')
    console.log(navMobile.classList)
})