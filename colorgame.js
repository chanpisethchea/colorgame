var game = {}
game.init = function() {
   setUpModeButtons();
   setupSquare();
   reset();
}

game.init();

var colors = generateRandomColors(6);
var numSquares = 6;
var colors = [];
var square = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
//var numSquares = 6;

init();

function setUpModeButtons(){
   for(var i = 0; i < modeButtons.length; i++){
   modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[0].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      // if(this.textContent === "Easy"){
      //    numSquares = 3;
      // } else {
      //    numSquares = 6;
      // }
      reset();
      //figure out how many squares to show
      //pick a new pickedColor
      //update page to reflect changes
   }); 
}
}


for(var i = 0; i<square.length; i++){
	//square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function(){
		var clickColor = this.style.background;
		if(clickColor === pickedColor){
			messageDisplay.textContent ="Correct!";
			resetButton.textContent = "Play Again";
			changeColors(clickColor);
			h1.style.background = clickColor;

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
   
function setupSquare(){
  square[i].addEventListener("click", function(){
    var clickColor = this.style.background;
    if(clickColor === pickedColor){
      messageDisplay.textContent ="Correct!";
      resetButton.textContent = "Play Again";
      changeColors(clickColor);
      h1.style.background = clickColor;

    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
} 

function reset(){

	//generate  all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor =  pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "_New Colors";
	messageDisplay.textContent = Correct ;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display ="block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
		
}

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		 
			squares[i].style.background = colors[i];		 
			squares[i].style.display = "_block";		 
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		 
			squares[i].style.background = colors[i];		 
			squares[i].style.display = "_block";

		 
	}

});


resetButton.addEventListener("click", function(){

	reset();
	//generate  all new colors
	// colors = generateRandomColors(6);
	// //pick a new random color from array
	// pickedColor =  pickColor();
	// //change colorDisplay to match picked Color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "_New Colors";
	// messageDisplay.textContent = Correct ;
	// //change colors of squares
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

function changeColors(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	  return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())

	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	var r =Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g =Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b =Math.floor(Math.random()*256);
	return "rgb(" + r + "," + g + "," + b + ")";
}