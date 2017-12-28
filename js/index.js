var size = 5;
var game = 0;
var totalGames = 12;
//make next a function (won) if won->show different confirm message

//begin
drawGame(0);
//create random game
function randomGame() {
  $(".square").removeClass("on");
  document.getElementById("game-name").innerText = "Random Game";
  var randomLength = Math.floor(Math.random() * 25) + 1;
  var randomArray = [];
  var randomNumber;
  var i = 0;
  while (i < randomLength) {
    randomNumber = Math.floor(Math.random() * 25) + 1;
    randomArray.push("#" + randomNumber.toString());
    i++;
  }
  $(randomArray.toString()).addClass("on");
  game = -1;
}

//toggle lights
function toggleAround(clicked) {
  var numClick = Number(clicked); // if this is not converted to a number, we get bad math (5+3=53)

  var center = document.getElementById(numClick);
  center.classList.toggle("on");

  if (numClick % size != 0 && numClick + 1 <= size * size) {
    //if not at end of row
    var right = document.getElementById(numClick + 1);
    right.classList.toggle("on");
  }

  if (numClick % size != 1 && numClick - 1 > 0) {
    //if not at beginning of row
    var left = document.getElementById(numClick - 1);
    left.classList.toggle("on");
  }

  if (numClick + size <= size * size) {
    //if not last row
    var below = document.getElementById(numClick + size);
    below.classList.toggle("on");
  }

  if (numClick - size > 0) {
    //if not first row
    var above = document.getElementById(numClick - size);
    above.classList.toggle("on");
  }

  var anyOn = $("div").hasClass("on");
  if (anyOn == false) {
    chooseNext();
  }
  
}

//next level click
$("#next").click(function() {
//I had refered to next in the choose level function by selecting the game-level class rather than game-level-numbers
  game++;

  if (game == 0) {
    drawGame(game);
  } else if (game <= totalGames) {
    //if games left
    drawGame(game);
  }  else {
    if (confirm(" No more designed games.  Play a random game?")) {
      randomGame();
    } else {
      document.getElementById("game-name").innerText =
        "Choose a game to continue.";
    }
  }
  
});

//go to next or option for random
function chooseNext() {
  if (game < totalGames) {
  //  if (confirm(" You won! Play next game?")) {//Nice to have= eliminate
      game++;
      drawGame(game);
   
   /* } else {
      document.getElementById("game-name").innerText =
        "Choose a game to continue.";
    }*/
  } else {
    if (confirm(" You won everything! Play a random game?")) {
      randomGame();
    } else {
      document.getElementById("game-name").innerText =
        "Choose a game to continue.";
    }
  }
}

//make game depending on number
function drawGame(game) {
  $(".square").removeClass("on tutorial"); // turn all off in case
  document.getElementById("game-name").innerText = "Game " + game;
  document.getElementById("13").innerText = " ";
  switch (game) {
    case 0:
      $("#8,#12, #13, #14, #18 ").addClass("on"); //turn em on
      document.getElementById("13").innerHTML = "<p id='press'>X</p>";
      break;
    case 1:
      $("#3, #11, #15, #17, #18, #19").addClass("on"); 
      break;
    case 2:
      $("#8, #11, #15, #19, #23 ").addClass("on");
      break;
    case 3:
      $("#4, #9, #10, #11, #15, #20, #22").addClass("on");
      break;
    case 4:
      $("#3, #5, #6, #13, #20, #21, #23").addClass("on");
      break;
    case 5:
      $("#2, #4, #5, #6, #12, #14, #20, #21, #22, #24").addClass("on");
      break;
    case 6:
      $("#1,#7,#10,#11,#13,#14,#17,#21,#22,#25").addClass("on");
      break;
    case 7:
      $("#3, #4, #6, #7, #8, #9, #14, #16, #18, #22, #25").addClass("on");
      break;
    case 8:
      $("#2, #3, #5, #10, #12, #13, #15, #16, #18, #19, #22, #25").addClass(
        "on"
      );
      break;
    case 9:
      $("#1, #5, #9, #11, #15, #13, #14, #15, #19, #22, #23, #25").addClass(
        "on"
      );
      break;
    case 10:
      $("#3, #4, #6, #7, #9, #10, #12, #13, #15, #16, #20, #21").addClass("on");
      break;
    case 11:
      $("#1, #3, #5, #7, #9, #16, #19, #22, #23, #25").addClass("on");
      break;
    case 12:
      $("#18, #22, #24").addClass("on");
      break;
  }
}

//toggle
$(".square").click(function() {
  var clickedSquare = $(this).attr("id"); //onClick grab id and run through toffle function
  toggleAround(clickedSquare);
});

//choose level
$(".game-number-buttons").click(function() {
  var gameString = String($(this).attr("id"));
  var gameLevelId = gameString.slice(1, gameString.length);
  var gameLevelChoice = Number(gameLevelId);
  // alert(gameLevelChoice);
  drawGame(gameLevelChoice);
  // document.getElementById("game-name").innerText = "Game " + gameLevelChoice;
  game = parseInt(gameLevelChoice);
});

//random button
$("#random").click(function() {
  randomGame();
});

//show tutorial game + how to play div
$("#help").click(function() {
  document.getElementById("game-name").innerText = "Tutorial Game";
  drawGame(0);
  game = 0;
  // open help
  $("#help-text").slideDown();
});

//close help
$("#close").click(function() {
  $("#help-text").slideUp();
});

/*Missing NICE TO HAVES
//
***Add animation on click and toggle
Add shadows, make pretty

***light up animation on win. 
DONE- A random game. Push random numbers to array random number less than or equal to 25 long

Below, or show number of moves done
 nicer to find a way to attach least moves and other info to a game 
 rather than this per choice. 
 if this, nice maybe to show how much left, but will need to go into negative.
- count moves against least number of moves required->points
*/