var size = 5;
var game=0;
var totalGames = 12;




var gamesList={
     0:"#8,#12, #13, #14, #18 ",
     1:"#3, #11, #15, #17, #18, #19",
     2:"#8, #11, #15, #19, #23 ",
     3:"#4, #9, #10, #11, #15, #20, #22",
     4:"#3, #5, #6, #13, #20, #21, #23",
     5:"#2, #4, #5, #6, #12, #14, #20, #21, #22, #24",
     6:"#1,#7,#10,#11,#13,#14,#17,#21,#22,#25",
     7:"#3, #4, #6, #7, #8, #9, #14, #16, #18, #22, #25",
     8:"#2, #3, #5, #10, #12, #13, #15, #16, #18, #19, #22, #25",
     9:"#1, #5, #9, #11, #15, #13, #14, #15, #19, #22, #23, #25",
     10:"#3, #4, #6, #7, #9, #10, #12, #13, #15, #16, #20, #21",
     11:"#1, #3, #5, #7, #9, #16, #19, #22, #23, #25",
     12:"#18, #22, #24",
};

var themesList = {//theme name and classes to be used for elements
valentines:{
  on: "blue",
  off:"pink",
},
  regular:{
   on: "on",
    off:"white",
},

};



var on="on";
var off="white";
var ons="on blue"//
var offs="white pink"


//choose theme
var theme=($('input:radio:checked').val());

//make theme object on, off attributes, colours
//remove class can be array except for selected class
$(":radio").change(function() {
  
  
  theme=($('input:radio:checked').val());
   on=(themesList[theme].on);
   off=(themesList[theme].off);
  
  /*if(theme=="valentines"){
    on="blue";
   off="pink";
    
     }
     
     else{
     on="on";   
    off="white";
     }*/
  
    var onList="";
  for (var themeName in themesList) {
  onList+=(themesList[themeName].on)+ " ";
}
  console.log(onList);
//  var key= Object.keys(themesList)[0]
  

drawGame(game); 
/*for(var list = 0;list < Object.keys(themesList).length; list++){
   onArray.push(themesList[Object.keys(themesList)[i].on));
 };*/

  //themesList[key]);//Object.keys(themesList));
  //Object.getOwnPropertyNames(themesList).on);
});

//begin
drawGame(0);
//create random game


//toggle lights
function toggleAround(clicked) {
  var numClick = parseInt(clicked); // if this is not converted to a number, we get bad math (5+3=53)

  var center = document.getElementById(numClick);
  center.classList.toggle(on);
    center.classList.toggle(off);

  if (numClick % size != 0 && numClick + 1 <= size * size) {
    //if not at end of row
    var right = document.getElementById(numClick + 1);
    right.classList.toggle(on);
    right.classList.toggle(off);
  }

  if (numClick % size != 1 && numClick - 1 > 0) {
    //if not at beginning of row
    var left = document.getElementById(numClick - 1);
    left.classList.toggle(on);
    left.classList.toggle(off);
  }

  if (numClick + size <= size * size) {
    //if not last row
    var below = document.getElementById(numClick + size);
    below.classList.toggle(on);
    below.classList.toggle(off);
  }

  if (numClick - size > 0) {
    //if not first row
    var above = document.getElementById(numClick - size);
    above.classList.toggle(on);
     above.classList.toggle(off);
  }

  var anyOn = $("div").hasClass(on);
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

//go to next game or option for random
function chooseNext() {
  if (game < totalGames) {
  //  if (confirm(" You won! Play next game?")) {//Nice to have= switch for animation
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

//prime it
function prime(){
  $(".square").removeClass(ons).removeClass(offs).addClass(off);//prime it
  $(".square").removeClass("tutorial"); // turn all off in case
}

//make game depending on number
function drawGame(game) {
prime();
  document.getElementById("game-name").innerText = "Game " + game;
  document.getElementById("13").innerText = " ";
  $(gamesList[game]).addClass(on).removeClass(offs);//adds on to ids, off to others
 // alert("Moves needed" +gamesList[game].moves);
  if(game==0){
     document.getElementById("13").innerHTML = "<h1 id='pressed'>X</h1>";
    $(".square").click(function(){
  document.getElementById("13").innerText = " ";
    });
  }
//$(".square").not(".on").addClass(off);
 // $(".square").addClass(off);
   console.log(on);
}

//toggle lights
$(".square").click(function() {
  var clickedSquare = $(this).attr("id"); //onClick grab id and run through toggle function
  toggleAround(clickedSquare);
});


function randomGame() {
prime();
  document.getElementById("game-name").innerText = "Random Game";
  document.getElementById("13").innerText = " ";//clear tutorial "X"
  var randomLength = Math.floor(Math.random() * 25) + 1;
  var randomArray = [];
  var randomNumber;
  var i = 0;
  while (i < randomLength) {
    randomNumber = Math.floor(Math.random() * 25) + 1;
    randomArray.push("#" + randomNumber/*.toString()*/);
    i++;
  }

  $(randomArray.join()).addClass(on).removeClass(off);// it's on or off
  game = -1;
  
}


//choose level
$(".game-number-buttons").click(function() {
  //or try data for html (data-number: 2)
  var gameString = String($(this).attr("id"));
  var gameLevelId = gameString.slice(1, gameString.length);
  var gameLevelChoice = Number(gameLevelId);
  drawGame(gameLevelChoice);

  game = parseInt(gameLevelChoice);
});

//random button
$("#random").click(function() {
  randomGame();
});

//show tutorial game + how to play div
$("#help").click(function() {
  $("#help-text").slideDown();
  drawGame(0);
  game = 0;
});

//close help
$("#close").click(function() {
  $("#help-text").slideUp();
});


//Missing NICE TO HAVES
/*
-theme
make it all jquery or javascript
ids should start with letters. 
***make next a function (won) if won->show different confirm message. trigger this function on #Next click, rather than it having its own function. 
***light up animation on win. 

-Add animation on click and toggle
-Add shadows, make pretty

DONE- A random game. Push random numbers to array random number less than or equal to 25 long

-Show number of moves done over min number of moves needed. If this, option to turn this off "relaxed"
- count moves against least number of moves required->points
DONE- nicer to find a way to attach least moves and other info to a game - object
*/