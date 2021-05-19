let x, y, speedX, speedY
let count = 0
let music = []
let lines = []
let color = [0, 0, 0, 0]

//Responsive maken van het canvas. In css width100vw en height 100vh

window.addEventListener('resize', () => {
  resizeCanvas(
    document.body.clientWidth,
    document.body.clientHeight
  )
})

//Laden voordat pagina laadt. For loop laadt alle muziekjes in

function preload() {
  for (let i = 0; music.length < 6; i++) {
    music[i] = loadSound(`../assets/music${i+1}.mp3`)
  }
}

function setup() {
  soundFormats('mp3')
  createCanvas(
    document.body.clientWidth,
    document.body.clientHeight
    )
  generateCoordinates()
}

function draw() {
  drawRandomLines()
}

//Deze functie zorgt ervoor dat als je een toets indrukt de muziek veranderd, de lijnen (cordinaten) veranderen en de lijnkleuren veranderen

function keyPressed() {
  generateCoordinates()
  changeSong()
  background(0)
  color = [random(255), random(255), random(255)]
  redraw()
}

//Liedjes afspelen en veranderen d.m.v. count variable. Music length = de 6 nummers
//Staat de count op 5? Ja = dan gaat hij naar het 1e nummer. Nee = volgende nummer door count++

function changeSong() {
  count - 1 < 0
    ? music[music.length - 1].stop()
    : music[count - 1].stop()
  music[count].play()
  count === 5 ? count = 0 : count++
}

function drawRandomLines() {
  const redVal = map(x, 0, width, 0 , 255)
  const greenVal = map (y, 0, height, 0 , 255)
  const rotation = map(y, 0, height, 0, TWO_PI)
  
  background('#00000005')
  translate(x, y)
  rotate(rotation)
  stroke(...color)
  line(-300, 0, 300, 0)

  x = x + speedX
  y = y + speedY
  if (x > width || x < 0) speedX = -speedX
  if (y > height || y < 0) speedY = -speedY
}

function generateCoordinates() {
  x = random(0, width)
  y = random(0, height)
  speedX = random(3, 10)
  speedY = random(3, 20)
} 
    
    
    