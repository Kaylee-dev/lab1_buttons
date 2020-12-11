var imageCorner = document.getElementById("imageCorner");
var backgroundImage = document.getElementById("container")

var button1 = document.getElementById("button1");
var count1 = 0;

var button2 = document.getElementById("button2");
var count2 = 0;

var button3 = document.getElementById("button3");
var count3 = 0;


button1.onclick = function() {
	if (button1.style.backgroundColor != "red") {
		// function word alleen uitgevoerd als die rood is, dus als er al op geklikt is. Anders word de function niet uitgevoerd.
		button1.style.backgroundColor = "#66ff99";
		button2.style.backgroundColor = "#66ff99";
		button3.style.backgroundColor = "#66ff99";
		imageCorner.src = "images/1.jpg";
		backgroundImage.style.backgroundImage = "url('images/bg1.jpg')";
		button1.style.backgroundColor = "red";
		count1 += 1;
		button1.innerHTML = count1;
	}
}

button2.onclick = function() {
	if (button2.style.backgroundColor != "red") {
		button1.style.backgroundColor = "#66ff99";
		button2.style.backgroundColor = "#66ff99";
		button3.style.backgroundColor = "#66ff99";
		imageCorner.src = "images/2.jpg";
		backgroundImage.style.backgroundImage = "url('images/bg2.jpg')";	
		button2.style.backgroundColor = "red";
		count2 += 1;
		button2.innerHTML = count2;
	}
}


button3.onclick = function() {
	if (button3.style.backgroundColor != "red") {
		button1.style.backgroundColor = "#66ff99";
		button2.style.backgroundColor = "#66ff99";
		button3.style.backgroundColor = "#66ff99";
		imageCorner.src = "images/3.jpg";
		backgroundImage.style.backgroundImage = "url('images/bg3.jpg')";
		button3.style.backgroundColor = "red";
	 	count3 += 1;
	 	button3.innerHTML = count3;
	}
}
