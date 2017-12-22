var size = 5;
var game = 0;
var totalGames= 12;


//create random game
function randomGame(){

 $(".square").removeClass("on");
   document.getElementById("game-name").innerText = "Random Game";
  var randomLength= Math.floor(Math.random()*25)+1;
  var randomArray= [];
  var randomNumber;
  var i=0;
  while( i<randomLength){
  randomNumber=  Math.floor(Math.random()*25)+1;
    randomArray.push("#"+randomNumber.toString());
    i++;
  }
  $(randomArray.toString()).addClass("on")
  game= -1;
 
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

//go to next or option for random
function chooseNext() {
 
  if( game < totalGames){
  if (confirm(" You won! Play next game?")) {
      game++;
   
    drawGame(game);
    document.getElementById("game-name").innerText = "Game " + game;
  }
   else {
    document.getElementById("game-name").innerText =
      "Choose a game to continue.";
  }
  }
    else{
  if (confirm(" You won everything! Play a random game?"))  {
  randomGame();
   } 
    else{
     document.getElementById("game-name").innerText =
      "Choose a game to continue.";  
    }
  }
}

//make game depending on number
function drawGame(game) {
  $(".square").removeClass("on"); // turn all off in case
  switch (game) {
    case 0: $("#8,#12, #13, #14, #18 ").addClass("on"); //turn em on
      break;
    case 1:
      $("#8,#12, #13, #14, #18 ").addClass("on"); 
      break;
    case 2:
      $("#8,#12, #13, #14, #18 ").addClass("on"); 
      break;
    case 3:
      $("#8,#12, #13, #14, #18 ").addClass("on"); 
      break;
    case 4:
      $("#2").addClass("on");
      break;
    case 5:
      $("#1 ,#2").addClass("on"); 
      break;
    case 6:
      $("#2").addClass("on");
      break;
    case 7:
      $("#1 ,#2").addClass("on"); 
      break;
    case 8:
      $("#2").addClass("on");
      break;
    case 9:
      $("#1 ,#2").addClass("on"); 
      break;
    case 10:
      $("#2").addClass("on");
      break;
      case 11:
       $("#8,#12, #13, #14, #18 ").addClass("on"); 
      break;
      case 12:
      $("#8,#12, #13, #14, #18 ").addClass("on");
      break;
  }
}

//toggle
$(".square").click(function() {
  var clickedSquare = $(this).attr("id"); //onClick grab id and run through toffle function
  toggleAround(clickedSquare);
});

//next level click
$("#next").click(function() {
   game++;
  if(game==0){
      document.getElementById("game-name").innerText = "Tutorial Game";
     drawGame(game);
  }
  
 else if (game<= totalGames){//if games left
  
  document.getElementById("game-name").innerText = "Game " + game;
  drawGame(game);
 }
  
  else{
     if (confirm(" No more designed games.  Play a random game?"))  {
 randomGame();
   } 
    else{
     document.getElementById("game-name").innerText =
      "Choose a game to continue.";  
    }
  }
});

//choose level
$(".game-level").click(function() {
  var gameString = String($(this).attr("id"));
  var gameLevelId = gameString.slice(0, -1);
  var gameLevelChoice = Number(gameLevelId);
  drawGame(gameLevelChoice);
  document.getElementById("game-name").innerText = "Game " + gameLevelChoice;
  game = gameLevelChoice;
});

//random button
$("#random").click(function() {
  randomGame();
 

});

//show tutorial game + how to play div
$("#help").click(function(){
                  document.getElementById("game-name").innerText = "Tutorial Game";
     drawGame(0);
  game= 0;
  // open help
 $("#help-text").slideDown();
                 });

//close help
$("#close").click(function(){
  $("#help-text").slideUp();
});
/*important

winable game levels added

}

*/
/*Missing NICE TO HAVES
//
Add animation on click and toggle
Add shadows, make pretty
DONE- A random game. Push random numbers to array random number less than or equal to 25 long

Below, or show number of moves done
 nicer to find a way to attach least moves and other info to a game 
 rather than this per choice. 
 if this, nice maybe to show how much left, but will need to go into negative.
- count moves against least number of moves required->points
*/

/* A less flexible method
var s1= document.getElementById("1");
var s2= document.getElementById("2");
var s3= document.getElementById("3");
var s4= document.getElementById("4");
var s5= document.getElementById("5");
var s6= document.getElementById("6");
var s7= document.getElementById("7");
var s8= document.getElementById("8");
var s9= document.getElementById("9");

s2.onclick= ()=>toggleAround(2);
s3.onclick= ()=>toggleAround(3);
s4.onclick= ()=>toggleAround(4);
s5.onclick= ()=>toggleAround(5);
s6.onclick= ()=>toggleAround(6);
s7.onclick= ()=>toggleAround(7);
s8.onclick= ()=>toggleAround(8);
s9.onclick= ()=>toggleAround(9);*/