var imageCorner = document.getElementById("imageCorner");
var backgroundImage = document.getElementById("container")

var button1 = document.getElementById("button1");
var count1 = 0;

button1.onclick = function() {
	imageCorner.src = "images/1.jpg";
	backgroundImage.style.backgroundImage = "url('images/bg1.jpg')";
	count1 += 1;
	button1.innerHTML = count1;
}


var button2 = document.getElementById("button2");
var count2 = 0;

button2.onclick = function() {
	imageCorner.src = "images/2.jpg";
	backgroundImage.style.backgroundImage = "url('images/bg2.jpg')";	
	count2 += 1;
	button2.innerHTML = count2;
}


var button3 = document.getElementById("button3");
var count3 = 0;

button3.onclick = function() {
	imageCorner.src = "images/3.jpg";
	backgroundImage.style.backgroundImage = "url('images/bg3.jpg')";
 	count3 += 1;
 	button3.innerHTML = count3;
}
