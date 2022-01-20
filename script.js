const firePixelsArray = []
const fireWidth = 48
const fireHeigth = fireWidth
const pixelSize = 5
const numberOfPixels = fireWidth * fireHeigth 
const fireColorsPalette = ['#070707', '#1f0707', '#2f0f07', '#470f07', '#571707', '#671f07',
						   '#771f07', '#8f2707', '#9f2f07', '#af3f07', '#bf4707', '#c74707',
						   '#df4f07', '#df5707', '#df5707', '#d75f07', '#d75f07', '#d7670f',
						   '#cf6f0f', '#cf770f', '#cf7f0f', '#cf8717', '#c78717', '#c78f17',
						   '#c7971f', '#bf9f1f', '#bf9f1f', '#bfa727', '#bfa727', '#bfaf2f',
						   '#b7af2f', '#b7b72f', '#b7b737', '#cfcf6f', '#dfdf9f', '#efefc7']
let decayMultiplier = 2

function createFireSource() {
	for (let column = 0; column <= fireWidth; column++) {
		const pixelIndex = numberOfPixels - fireWidth + column

		firePixelsArray[pixelIndex] = fireColorsPalette.length
	}
}

function controlFireIntensity(value) {
	if (decayMultiplier > 2 || Math.sign(value) === 1) {
		decayMultiplier += value	
	}
}


function createFireDataStructure() {
	for (let i = 0; i < numberOfPixels; i++) {
		firePixelsArray[i] = 0
	}
}

function calculateFirePropagation() {
	for (let column = 0; column < fireWidth; column++) {
		for (let row = 0; row < fireHeigth; row++) {
			const pixelIndex = column + (fireWidth * row)

			updateFireIntensityPerPixel(pixelIndex)
		}	
	}
	renderFire()
}

function updateFireIntensityPerPixel(currentPixelIndex) {
	const belowPixelIndex = currentPixelIndex + fireWidth

	if (belowPixelIndex >= numberOfPixels) {		
		return 
	}

	const decay = Math.floor(Math.random() * decayMultiplier)
	const belowPixelFireIntensity = firePixelsArray[belowPixelIndex]
	const newFireIntensity = 
		belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0

	firePixelsArray[currentPixelIndex - decay] = newFireIntensity
}

function renderFire() {
	let canvas = document.getElementById('canvas')

	if (canvas.getContext) {	
		var ctx = canvas.getContext('2d')
		for (let row = 0; row < fireHeigth; row++) {
			for (let column = 0; column < fireWidth; column++) {
				const pixelIndex = column + (fireWidth * row) 
				fireIntensity = firePixelsArray[pixelIndex]
				const color = fireColorsPalette[fireIntensity]

				ctx.fillStyle = color
				ctx.fillRect (column*pixelSize, row*pixelSize , pixelSize, pixelSize)
			} 	
		}
	}
}

function loop() {
	createFireDataStructure()
	createFireSource()
	renderFire()
	console.log(firePixelsArray)
	setInterval(calculateFirePropagation, 100)
	
}

loop()

