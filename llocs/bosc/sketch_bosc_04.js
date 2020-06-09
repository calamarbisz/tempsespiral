let layerBase
let layerRed
let layerBlue
let offsetMax
let offset
let offsetDelta

function preload() {
	layerBase = loadImage("../../assets/imatges/llocs/bosc_13.jpg");
}

function setup() {
  //amb això es canvia longitud,velocitat
	offset = 0
	offsetMax = 30
	offsetDelta = 0.7
	let imgWidth = windowWidth
	layerBase.resize(imgWidth, 0)
	//layerBase.filter('gray')
	layerBase.loadPixels()

	createCanvas(layerBase.width, layerBase.height)
	image(layerBase, 0, 0)

	layerRed= layerBase.get(0, 0, width, height)
	layerBlue = layerBase.get(0, 0, width, height)

	layerRed.loadPixels()
	layerBlue.loadPixels()

	rgbFilter(layerRed, color(0))
	rgbFilter(layerBlue, color(5))

	layerRed.resize(imgWidth + offset, 0)
	layerBlue.resize(imgWidth + offset,0)

	createCanvas(layerBase.width, layerBase.height)

}

function draw() {
	image(layerBase, 0, 0)
	tint(150,70)
	image(layerRed, -offset, 10)
	image(layerBlue, offset, 0)

	if (offset >= offsetMax || offset < 0) {
		offsetDelta = -offsetDelta
	}
	offset += offsetDelta
}

function rgbFilter(img, colorMask) {
	for(let i = 0; i < img.pixels.length; i += 4) {
		img.pixels[i]   = img.pixels[i] * colorMask.levels[0]
		img.pixels[i+1] = img.pixels[i+1] * colorMask.levels[1]
		img.pixels[i+2] = img.pixels[i+2] * colorMask.levels[2]
	}
	//img.updatePixels()

}
