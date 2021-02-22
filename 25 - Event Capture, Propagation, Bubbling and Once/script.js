const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value)
    // e.stopPropagation() // stop bubbling
}

// once only happens once, useful for store checkout
divs.forEach(div => div.addEventListener('click', logText, { capture: false, once: true }))
button.addEventListener('click', () => {
    console.log('CLICKED')
}, { once: true })