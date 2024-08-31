const button = document.getElementById('botao-aleatorio')

function moveButton(event) {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  const newPositionX = Math.floor(Math.random() * (windowWidth - button.offsetWidth))
  const newPositionY = Math.floor(Math.random() * (windowHeight - button.offsetHeight))

  button.style.left = newPositionX + 'px'
  button.style.top = newPositionY + 'px'
  button.style.position = 'absolute'
}

button.addEventListener('mouseover', (event) => {
  moveButton(event)
})
button.addEventListener('touchstart', (event) => {
  moveButton(event)
})
