var size = 5;
var game = 0;
var totalGames = 12;

var gamesList = {
  0: "#s8,#s12, #s13, #s14, #s18 ",
  1: "#s3, #s11, #s15, #s17, #s18, #s19",
  2: "#s8, #s11, #s15, #s19, #s23 ",
  3: "#s4, #s9, #s10, #s11, #s15, #s20, #s22",
  4: "#s3, #s5, #s6, #s13, #s20, #s21, #s23",
  5: "#s2, #s4, #s5, #s6, #s12, #s14, #s20, #s21, #s22, #s24",
  6: "#s1,#s7,#s10,#s11,#s13,#s14,#s17,#s21,#s22,#s25",
  7: "#s3, #s4, #s6, #s7, #s8, #s9, #s14, #s16, #s18, #s22, #s25",
  8: "#s2, #s3, #s5, #s10, #s12, #s13, #s15, #s16, #s18, #s19, #s22, #s25",
  9: "#s1, #s5, #s9, #s11, #s15, #s13, #s14, #s15, #s19, #s22, #s23, #s25",
  10: "#s3, #s4, #s6, #s7, #s9, #s10, #s12, #s13, #s15, #s16, #s20, #s21",
  11: "#s1, #s3, #s5, #s7, #s9, #s16, #s19, #s22, #s23, #s25",
  12: "#s18, #s22, #s24"
};

var themesList = {
  //theme name and classes to be used for elements
 
  regular: {
    on: "on--regular",
    off: "off--regular",
    gameBackground: "background--regular",
    gameLevelColor: "game-level--regular",
    textColor: "text--regular",
    helpColor: "background--regular", //#help-text
    bodyColor: "background--regular" //body
  },
  starTrek: {
    on: "on--star-trek",
    off: "off--star-trek",
    gameBackground: "background--star-trek",
    gameLevelColor: "game-level--star-trek",
    textColor: "text--star-trek",
    helpColor: "help--star-trek", //#help-text
    bodyColor: "background--star-trek" //body
  },
  photo: {
    on: "on--photo",
    off: "off--photo",
    gameBackground: "game-area--photo", //.game-area
    gameLevelColor: "game-level--photo", //.game-level
    textColor: "text--photo",
    helpColor: "help--photo", //#help-text
    bodyColor: "background--photo" //body
},
  /* halloween:{
      on: "on--halloween",
    off:"off--halloween",
       bodyColor: "background--halloween",//body 
  gameBackground:"game-area--halloween",
         gameLevelColor:"game-level--halloween",
     textColor: "text--halloween",
 helpColor:"background--halloween",//#help-text 
},*/
   valentines: {
    on: "on--valentines",
    off: "off--valentines",
    gameBackground: "game-area--valentines", //.game-area
    gameLevelColor: "game-level--valentines", //.game-level
    textColor: "text--valentines",
    helpColor: "help--valentines", //#help-text
    bodyColor: "background--valentines" //body
  },
  christmas: {
    on: "on--christmas",
    off: "off--christmas",
    bodyColor: "background--christmas", //body
    gameBackground: "game-area--christmas",
    gameLevelColor: "game-level--christmas",
    textColor: "text--christmas",
    helpColor: "background--christmas" //#help-text
  }
};

//Default theme according to dates
function checkWithDates() {
  var currentTime = new Date();
  var currentDate = currentTime.getDate();
  var currentMonth = currentTime.getMonth();
  var currentDay = currentTime.getDay();
  if (currentMonth == 1) {
    if (currentDate > 0 && currentDate < 15) {
      $("#valentines-theme").prop("checked", true);
    }
  }  else if (currentMonth == 11) {
    if (currentDate > 14) $("#christmas-theme").prop("checked", true);
  } 
      else if (currentDay == 2) {
  
    $("#star-trek-theme").prop("checked", true);
  }
        else if (currentDay== 5) {
          $("#theme--photo").prop("checked", true);
        }
          else {
    $("#regular-theme").prop("checked", true);
  }
  
   /*else if(currentMonth==9){
    if (currentDate >25){
      $("#halloween-theme").prop("checked", true); 
    }
  }*/
}
//choose theme
checkWithDates();
var theme = $("input:radio:checked").val();

var squaresArray = [];
$(".square").each(function() {
  squaresArray.push("#" + this.id);
});

var squaresArrayReverse = squaresArray.slice().reverse(); //slice necessary so not to reverse in place

//theme elements
var on;
var off;
var gameBackground;
var textColor;
var bodyColor;
var helpColor;
var gameLevelColor;
//List of possible options-> may be able to simplify this, just need current theme values
var onList = "";
for (var themeName in themesList) {
  onList += themesList[themeName].on + " ";
}
var ons = onList;

var offList = "";
for (var themeName in themesList) {
  offList += themesList[themeName].off + " ";
}
var offs = offList;

var gameBackgroundsList = "";
for (var themeName in themesList) {
  gameBackgroundsList += themesList[themeName].gameBackground + " ";
}
var gameBackgrounds = gameBackgroundsList;

var textColorsList = "";
for (var themeName in themesList) {
  textColorsList += themesList[themeName].textColor + " ";
}
var textColors = textColorsList;

var bodyColorList = "";
for (var themeName in themesList) {
  onList += themesList[themeName].bodyColor + " ";
}
var bodyColors = onList;

var helpColorList = "";
for (var themeName in themesList) {
  onList += themesList[themeName].helpColor + " ";
}
var helpColors = onList;

var gameLevelColorList = "";
for (var themeName in themesList) {
  onList += themesList[themeName].gameLevelColor + " ";
}
var gameLevelColors = onList;

//make theme object on, off attributes, colours
//remove class can be array except for selected class

//make this onLoad
addTheme();

function addTheme() {
  // GET IDS of squares with on class, remove on classes, add new on. same for offs
  var onSquaresArray = [];
  $(".square." + on).each(function() {
    onSquaresArray.push("#" + this.id);
  });
  var onSquares = onSquaresArray.join(", ");

  var offSquaresArray = [];
  $(".square." + off).each(function() {
    offSquaresArray.push("#" + this.id);
  });
  var offSquares = offSquaresArray.join(", ");

  //get theme components
  theme = $("input:radio:checked").val();
  on = themesList[theme].on;
  off = themesList[theme].off;
  gameBackground = themesList[theme].gameBackground;
  textColor = themesList[theme].textColor;
  bodyColor = themesList[theme].bodyColor;
  helpColor = themesList[theme].helpColor;
  gameLevelColor = themesList[theme].gameLevelColor;

  //add theme to game
  $(onSquares)
    .removeClass(onList)
    .addClass(on);
  $(offSquares)
    .removeClass(offList)
    .addClass(off);

  //add theme to example
 
  $(".show-on")
    .removeClass(onList)
    .addClass(on);
  $(".show-off")
    .removeClass(offList)
    .addClass(off);
  
  //add theme to .game-area
  $(".game-area")
    .removeClass(gameBackgrounds)
    .addClass(gameBackground);
  $("body,.square, .game-choices")
    .removeClass(textColors)
    .addClass(textColor);
  $("body")
    .removeClass(bodyColors)
    .addClass(bodyColor);
  $("#help-text")
    .removeClass(helpColors)
    .addClass(helpColor);
  $(".game-level")
    .removeClass(gameLevelColors)
    .addClass(gameLevelColor);
  //remove themes from elements that have specific classes/ IDs for on/off, then add new themes so do not need to redraw
}

//add theme with selection
$(":radio").change(function() {
  addTheme();
});

//begin
drawGame(0);

//toggle lights
function toggleAround(clicked) {
  var numClick = parseInt(clicked); // if this is not converted to a number, we get bad math (5+3=53)

  var center = document.getElementById("s" + numClick);
  center.classList.toggle(on);
  center.classList.toggle(off);

  if (numClick % size != 0 && numClick + 1 <= size * size) {
    //if not at end of row
    console.log(numClick + 1);
    var right = document.getElementById("s" + (numClick + 1));
    right.classList.toggle(on);
    right.classList.toggle(off);
  }

  if (numClick % size != 1 && numClick - 1 > 0) {
    //if not at beginning of row
    var left = document.getElementById("s" + (numClick - 1));
    left.classList.toggle(on);
    left.classList.toggle(off);
  }

  if (numClick + size <= size * size) {
    //if not last row
    var below = document.getElementById("s" + (numClick + size));
    below.classList.toggle(on);
    below.classList.toggle(off);
  }

  if (numClick - size > 0) {
    //if not first row
    var above = document.getElementById("s" + (numClick - size));
    above.classList.toggle(on);
    above.classList.toggle(off);
  }

  var anyOn = $(".square").hasClass(on); //check if squares have on, example div will
  if (anyOn == false) {
    showWin();
  }
}

//next level click
$("#next").click(function() {
  game++;
  if (game <= totalGames) {
    drawGame(game);
  } else {
    if (confirm(" No more designed games.  Play a random game?")) {
      randomGame();
    } else {
      document.getElementById("game-name").innerText =
        "Choose a game to continue.";
    }
  }
});

//go to next game or option for random
function nextAfterWin() {
  if (game < totalGames) {
    game++;
    drawGame(game);
  } else {
    if (confirm(" You won everything! Play a random game?")) {
      randomGame();
    } else {
      document.getElementById("game-name").innerText =
        "Choose a game to continue.";
    }
  }
}

function drawGame(game) {
  $(".square")
    .fadeOut(100)
    .delay(200)
    .fadeIn();

  //timeout so happen when faded out
  if (game !== 0) {
    setTimeout(function() {
      document.getElementById("game-name").innerText = "Game " + game;
      $("#s13").removeClass("tutorial");
    }, 150);
  }

  if (game == 0) {
    setTimeout(function() {
      document.getElementById("game-name").innerText = "Game 0 (Tutorial)";
      $("#s13").addClass("tutorial");
      $(".square").click(function() {
        $("#s13").removeClass("tutorial");
      });
    }, 150);
  }
  setTimeout(function() {
    $(".square")
      .removeClass(ons)
      .removeClass(offs)
      .addClass(off);
    $(gamesList[game])
      .addClass(on)
      .removeClass(offs); //adds on to ids, off to others
  }, 150);

  console.log(game);
}

//toggle lights
$(".square").click(function() {
  var clickedSquare = $(this)
    .attr("id")
    .slice(1); //onClick grab id and run through toggle function
  toggleAround(clickedSquare);
});

//create random game
function randomGame() {
  $(".square")
    .fadeOut(100)
    .delay(200)
    .fadeIn();
  document.getElementById("game-name").innerText = "Random Game";

  var randomLength = Math.floor(Math.random() * 25) + 1;
  var randomArray = [];
  var randomNumber;
  var i = 0;
  while (i < randomLength) {
    randomNumber = Math.floor(Math.random() * 25) + 1;
    randomArray.push("#s" + randomNumber /*.toString()*/);
    i++;
  }

  setTimeout(function() {
    $(".square")
      .removeClass(ons)
      .removeClass(offs)
      .addClass(off);
    $(randomArray.join())
      .addClass(on)
      .removeClass(offs); //adds on to ids, off to others
    $("#s13").removeClass("tutorial"); //clear tutorial "X"*/
  }, 150);
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

//winning animations
function Bye(cell) {
  $(cell).fadeOut();
}
function Hi(cell) {
  $(cell).fadeIn();
}
function cellChange(cell, animateClass) {
  $(cell).toggleClass(animateClass);
}

var onAnimate = on;
function showWin() {
  $("#game-name").text("You won game " + game + "!");

  var time = 150;
  //fadeout one at a time
  squaresArray.forEach(function(square) {
    setTimeout(function() {
      Bye(square);
    }, time);
    time += 50;
  });
  //fadein one at a time
  squaresArrayReverse.forEach(function(square) {
    setTimeout(function() {
      Hi(square);
    }, time);
    time += 50;
  });
  //add game level color one at a time, then remove
  for (var i = 0; i < 2; i++) {
    squaresArray.forEach(function(square, animateClass) {
      setTimeout(function() {
        cellChange(square, gameLevelColor);
      }, time);
      time += 25;
    });
  }

  time += 75;
  //flash the squares game level color
  for (var i = 0; i < 6; i++) {
    setTimeout(function() {
      cellChange($(".square"), gameLevelColor);
    }, time);

    time += 250;
  }

  time += 250;
  //set up next game
  setTimeout(nextAfterWin, time);
}

//Missing NICE TO HAVES
/*
-theme
make it all jquery or javascript
Done-ids should start with letters. 
***make next a function (won) if won->show different confirm message. trigger this function on #Next click, rather than it having its own function. 
***light up animation on win. 
-Add animation on click and toggle
X-Add shadows, make pretty
DONE- A random game. Push random numbers to array random number less than or equal to 25 long
-Show number of moves done over min number of moves needed. If this, option to turn this off "relaxed"
- count moves against least number of moves required->points
DONE- nicer to find a way to attach least moves and other info to a game - object
*/