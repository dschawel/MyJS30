const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed')

navigator.geolocation.watchPosition((data) => {
    console.log(data)
    speed.textContent = data.coords.speed
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.log(err)
    alert("Hey! You gotta allow that to happen!")
})