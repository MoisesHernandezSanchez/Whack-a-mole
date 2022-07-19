const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time-left')
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

let score = 0
let currTime = 30
let timerId = null
let hitPos

scoreDisplay.innerHTML = score
timeDisplay.innerHTML = currTime

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })

  let randPos = squares[Math.floor(Math.random() * 9)]
  randPos.classList.add('mole')

  hitPos = randPos.id
}

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPos) {
      score++
      scoreDisplay.textContent = score
      hitPos = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 550)
}

moveMole()

function countDown() {
  currTime--
  timeDisplay.textContent = currTime

  if (currTime <= 0) {
    clearInterval(countDownTimerId)
    alert(`Game over! Final Score: ${score}`)
    resetGame()
  }
}

let countDownTimerId = setInterval(countDown, 1000)

function resetGame() {
  score = 0
  currTime = 30
  timerId = null

  scoreDisplay.innerHTML = score
  timeDisplay.innerHTML = currTime
  moveMole()
}
