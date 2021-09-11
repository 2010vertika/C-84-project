//var img_x,img_y;
//var image_width,image_height;

canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

image_width = 300;
image_height = 100;

var img_image;

img_x = 200;
img_y = 150;

function add() {
	img_imageTag = new Image();
	img_imageTag.onload = uploading();
	img_imageTag.src = img_image;
}

function uploading() {

	ctx.drawImage(img_imageTag, img_x, img_y, image_width, image_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
		alphabetkey();
		document.getElementById("d1").innerHTML = "You pressed Alphabet Key";
	}

	else if (keyPressed >= 48 && keyPressed <= 57) {
		numberkey();
		document.getElementById("d1").innerHTML = "You Pressed Number key";
	}

	else if (keyPressed >= 37 && keyPressed <= 40) {
		arrowkey();
		document.getElementById("d1").innerHTML = "You Pressed Arrow key";
	}

	else if ((keyPressed == 17) || (keyPressed == 18 || keyPressed == 19)) {
		specialkey();
		document.getElementById("d1").innerHTML = "You Pressed Special key";
	}
	else {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}
}





function alphabetkey() {
	img_image = "Alpkey.png";
     add();
	 uploading();

}
function numberkey() {
	img_image = "numkey.png";
	add();
	uploading();

}
function arrowkey() {
	img_image = "Arrkey.png";
	uploading();
	add();

}
function specialkey() {
	img_image = "spkey.png";
	uploading();
	add();

}
function otherkey() {
	img_image = "otherkey.png";
	uploading();
	add();
}

