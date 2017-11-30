var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("col-dis");
  colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setModeButtons();
  setSquares();
  reset1();
}

function setModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset1();
    });
  }
}

function setSquares(){
  for(var i = 0; i < square.length; i++){
    square[i].addEventListener("click", function(){
      var scolor = this.style.backgroundColor;
      if(scolor === pickedColor){
        message.textContent = "Correct";
        changeColor(pickedColor);
        document.querySelector("h1").style.backgroundColor = pickedColor;
        // document.querySelector("span").style.backgroundColor = pickedColor;
        reset.textContent = "Play Again?";
      }
      else{
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}

function reset1(){
  colors = generateRandomColors(numSquares);
  pickedColor = pick();
  reset.textContent = "New Colors";
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  document.querySelector("h1").style.backgroundColor = "steelblue";
  for(var i = 0; i < square.length; i++){
    if(colors[i]){
      square[i].style.display = "block";
      square[i].style.backgroundColor = colors[i];
    }
    else{
      square[i].style.display = "none";
    }

  }
}

reset.addEventListener("click", function(){
    reset1();
  });

function changeColor(color){
  for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = color;
  }
}

function pick(){
  return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  var red = Math.floor(Math.random()*256);
  return "rgb("+red+", "+green+", "+blue+")";
}
