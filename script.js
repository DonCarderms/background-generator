var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random_btn = document.querySelector(".random_btn")
var first_load_rgb = [generateRGB(), generateRGB()]

changeBackground(`linear-gradient(to right, ${rgbToHex(first_load_rgb[0])}, ${rgbToHex(first_load_rgb[1])}`);
displayColorText(`${rgbToHex(first_load_rgb[0])}, ${rgbToHex(first_load_rgb[1])}`)
// displayColorText(`rgb (${(first_load_rgb[0].toString())}), rgb (${(first_load_rgb[1].toString())})`)
setColorSelector(rgbToHex(first_load_rgb[0]), rgbToHex(first_load_rgb[1]))

function displayColorText (value){
	var linear = "linear-gradient(to right, "
	return css.textContent = linear + value + ")"
}

function setColorSelector (value1, valu2) {
	color1.value = value1
	color2.value = valu2

}

function changeBackground (color) {
	body.style.background = color
}



// rgb (33,221,186) rgb (215,100,217)

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}


function random(min,max) {
 	return Math.floor((Math.random())*(max-min+1))+min;
}

function generateRGB () {
	return [random(0, 255), random(0, 255), random(0, 255)]
}

function generateRandomColors () {
	var rgb = [generateRGB(), generateRGB()]
	changeBackground(`linear-gradient(to right, rgb(${(rgb[0].toString())}), rgb(${(rgb[1].toString())}))`);
  displayColorText(`${rgbToHex(rgb[0])}, ${rgbToHex(rgb[1])}`)
	setColorSelector(rgbToHex(rgb[0]), rgbToHex(rgb[1]))
}

function setGradient(e) {
	if(e.target.classList.contains("color1")){
			 color1.value = e.target.value
		   changeBackground(`linear-gradient(to right, ${color1.value}, ${color2.value})`)
			 displayColorText(`${color1.value}, ${color2.value}`);
	}

	if(e.target.classList.contains("color2")){
		  color2.value = e.target.value
			changeBackground(`linear-gradient(to right, ${color1.value}, ${color2.value})`)
			 displayColorText(`${color1.value}, ${color2.value}`);
	}

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random_btn.addEventListener("click", generateRandomColors)