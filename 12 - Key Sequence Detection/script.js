const pressed = []
const secretCode = 'david'
window.addEventListener('keyup', (e) => {
// console.log(e.key)
pressed.push(e.key)
// starts from the back up to secret code length, trim length of pressed array to length of secret code array
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
// console.log(pressed)
if (pressed.join('').includes(secretCode)) {
    console.log('Ding Ding!')
    cornify_add()
}
})