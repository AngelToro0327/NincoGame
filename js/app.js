const player = document.querySelector('#player')
const score = document.querySelector('#score')

window.addEventListener('DOMContentLoaded', () => {
    enemies()
})

player.addEventListener('click', () => {
    jump()
    
})

document.body.addEventListener('keypress', () => {
    jump()
})

function jump () {
    player.style.transform = 'translate(100px, -200px)'
    setTimeout(() => {
        player.style.transform = 'translate(200px,0px)'
    }, 100)
    setTimeout(() => {  
        player.style = null
    }, 300)
}

function enemies () {
    let ids = 1; 
    setInterval(() => {
        score.textContent = `Score: ${ids}`
        console.log(ids++)
        const pincho = document.createElement('div')
        pincho.className = 'pincho' 
        document.body.appendChild(pincho)
        setTimeout(() => {
            pincho.style.transform = 'translateX(-2000px)';
        },100)
    }, 1000)
}