var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  // mode buttons event listeners
  setupModeButtons();

  // set up sqaures
  setupSquares();

  resetChanges();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      resetChanges();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to sqaures
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;

      // compare color to picked color
      if (clickedColor === pickedColor) {
        message.textContent = "Correct!";
        reset.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}
function resetChanges() {
  // generate new colors
  colors = generateRandomColors(numSquares);

  // pick a new random colors
  pickedColor = pickColor();

  // change the colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;

  reset.textContent = "New Colors";

  message.textContent = "";
  // change the colors of the sqaure
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

reset.addEventListener("click", function() {
  resetChanges();
});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
  // loop through all the squares
  for (var i = 0; i < colors.length; i++) {
    // change all the colors to the given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

function randomColor() {
  // pick a red for 0 to 255
  var r = Math.floor(Math.random() * 256);

  // pick a green for 0 to 255
  var g = Math.floor(Math.random() * 256);

  // pick a blue  for 0 to 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
