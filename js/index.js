var size = 5;
var game=0;
var totalGames = 12;




var gamesList={
     0:"#s8,#s12, #s13, #s14, #s18 ",
     1:"#s3, #s11, #s15, #s17, #s18, #s19",
     2:"#s8, #s11, #s15, #s19, #s23 ",
     3:"#s4, #s9, #s10, #s11, #s15, #s20, #s22",
     4:"#s3, #s5, #s6, #s13, #s20, #s21, #s23",
     5:"#s2, #s4, #s5, #s6, #s12, #s14, #s20, #s21, #s22, #s24",
     6:"#s1,#s7,#s10,#s11,#s13,#s14,#s17,#s21,#s22,#s25",
     7:"#s3, #s4, #s6, #s7, #s8, #s9, #s14, #s16, #s18, #s22, #s25",
     8:"#s2, #s3, #s5, #s10, #s12, #s13, #s15, #s16, #s18, #s19, #s22, #s25",
     9:"#s1, #s5, #s9, #s11, #s15, #s13, #s14, #s15, #s19, #s22, #s23, #s25",
     10:"#s3, #s4, #s6, #s7, #s9, #s10, #s12, #s13, #s15, #s16, #s20, #s21",
     11:"#s1, #s3, #s5, #s7, #s9, #s16, #s19, #s22, #s23, #s25",
     12:"#s18, #s22, #s24",
};

var themesList = {//theme name and classes to be used for elements
valentines:{
  on: "v-on",
  off:"v-off",
  gameBackground:"v-game", //.game-area
  gameLevelColor:"v-level",//.game-level
  textColor: "v-text",
 helpColor:"v-help",//#help-text
  bodyColor: "v-background",//body
},
  regular:{
   on: "on",
    off:"off",
  gameBackground:"game-background",
         gameLevelColor:"game-level-color",
     textColor: "black-text",
 helpColor:"background",//#help-text
  bodyColor: "background",//body
},
starTrek:{
    on: "on--star-trek",
    off:"off--star-trek",
  gameBackground:"background--star-trek",
         gameLevelColor:"game-level--star-trek",
     textColor: "text--star-trek",
 helpColor:"help--star-trek",//#help-text
  bodyColor: "background--star-trek",//body 
},
  halloween:{
      on: "on--halloween",
    off:"off--halloween",
       bodyColor: "background--halloween",//body 
  gameBackground:"game-area--halloween",
         gameLevelColor:"game-level--halloween",
     textColor: "text--halloween",
 helpColor:"background--halloween",//#help-text 
},
   christmas:{
      on: "on--christmas",
    off:"off--christmas",
       bodyColor: "background--christmas",//body 
  gameBackground:"game-area--christmas",
         gameLevelColor:"game-level--christmas",
     textColor: "text--christmas",
 helpColor:"background--christmas",//#help-text 
}
};

//Default theme according to dates
function checkWithDates(){
var currentTime = new Date();
var currentDate = currentTime.getDate();
var currentMonth = currentTime.getMonth();

if(currentMonth==1){
  if(currentDate>0 && currentDate<15){
    $("#valentines-theme").prop("checked",true);
  }
}
else if(currentMonth==9){
    if (currentDate >25){
      $("#halloween-theme").prop("checked", true); 
    }
  }
  else if (currentDate%2==1){
  $("#star-trek-theme").prop("checked", true);
}
 else if (currentMonth==11){
   if(currentDate>14)
  $("#christmas-theme").prop("checked", true);
}
else{
$("#regular-theme").prop("checked",true);
}
}
//choose theme
checkWithDates();
var theme=($('input:radio:checked').val());


var squaresArray=[];
  $(".square").each(function(){
   squaresArray.push("#" + this.id);
  });

var squaresArrayReverse = squaresArray.slice().reverse();//slice necessary so not to reverse in place

//theme elements
var on;
var off;
var gameBackground;
var textColor;
var bodyColor;
var helpColor;
var gameLevelColor;
//List of possible options-> may be able to simplify this, just need current theme values
var onList="";
  for (var themeName in themesList) {
  onList+=(themesList[themeName].on)+ " ";
}
var ons=onList;

var offList="";
  for (var themeName in themesList) {
  offList+=(themesList[themeName].off)+ " ";
}
var offs=offList;

var gameBackgroundsList="";
  for (var themeName in themesList) {
  gameBackgroundsList+=(themesList[themeName].gameBackground)+ " ";
}
var gameBackgrounds=gameBackgroundsList;

var textColorsList="";
  for (var themeName in themesList) {
  textColorsList+=(themesList[themeName].textColor)+ " ";
}
var textColors=textColorsList;

var bodyColorList="";
  for (var themeName in themesList) {
  onList+=(themesList[themeName].bodyColor)+ " ";
}
var bodyColors=onList;

var helpColorList="";
  for (var themeName in themesList) {
  onList+=(themesList[themeName].helpColor)+ " ";
}
var helpColors=onList;

var gameLevelColorList="";
  for (var themeName in themesList) {
  onList+=(themesList[themeName].gameLevelColor)+ " ";
}
var gameLevelColors=onList;



//make theme object on, off attributes, colours
//remove class can be array except for selected class

//make this onLoad
addTheme();

function addTheme(){
  
  // GET IDS of squares with on class, remove on classes, add new on. same for offs
  var onSquaresArray=[];
  $(".square."+on).each(function(){
    onSquaresArray.push("#" + this.id);
  });
  var onSquares= onSquaresArray.join(", ");
  
  
  var offSquaresArray=[];
  $(".square."+off).each(function(){
    offSquaresArray.push("#" + this.id);
  });
  var offSquares= offSquaresArray.join(", ");
  
  
  //get theme components
  theme=($('input:radio:checked').val());
  on=(themesList[theme].on);
  off=(themesList[theme].off);
  gameBackground= (themesList[theme].gameBackground);
  textColor=(themesList[theme].textColor);
    bodyColor=(themesList[theme].bodyColor);
    helpColor=(themesList[theme].helpColor);
   gameLevelColor=(themesList[theme].gameLevelColor);
  
  //add theme to game
   $(onSquares).removeClass(onList).addClass(on);
   $(offSquares).removeClass(offList).addClass(off);
  
  //add theme to example
  $(".show-on").removeClass(onList).addClass(on);
  $(".show-off").removeClass(offList).addClass(off);
 
  //add theme to .game-area
  $(".game-area").removeClass(gameBackgrounds).addClass(gameBackground);
   $("body,.square, .game-choices").removeClass(textColors).addClass(textColor);
   $("body").removeClass(bodyColors).addClass(bodyColor);
   $("#help-text").removeClass(helpColors).addClass(helpColor);
  $(".game-level").removeClass(gameLevelColors).addClass(gameLevelColor);
  //remove themes from elements that have specific classes/ IDs for on/off, then add new themes so do not need to redraw

};

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
    var below = document.getElementById("s" +( numClick + size));
    below.classList.toggle(on);
    below.classList.toggle(off);
  }

  if (numClick - size > 0) {
    //if not first row
    var above = document.getElementById("s"+ (numClick - size));
    above.classList.toggle(on);
     above.classList.toggle(off);
  }

  var anyOn = $(".square").hasClass(on);//check if squares have on, example div will
  if (anyOn == false) {
   showWin(); 
  // setTimeout(showWin, 750);
     //chooseNext();
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

  // $(".square").fadeOut();
//make game depending on number
function drawGame(game) {
   $(".square").fadeOut(100).delay(200).fadeIn();
//prime();
//  setTimeout(prime(), 150);//remove classes , add back on
  
  
  // if(game!==0) need to correct so no double drawing on 0
   if(game!==0) {
  setTimeout(function(){

  document.getElementById("game-name").innerText = "Game " + game;
  $("#s13").removeClass("tutorial");
  }, 150);
   }
  
  if(game==0){
    setTimeout(function(){
       document.getElementById("game-name").innerText = "Game 0 (Tutorial)";
   $("#s13").addClass("tutorial");//innerHTML = "<p id='pressed'>&#x1D5EB;</p>";
    $(".square").click(function(){
  //document.getElementById("s13").innerText = " ";
       $("#s13").removeClass("tutorial");
    });
    }, 150);
  }
   setTimeout(function(){
      $(".square").removeClass(ons).removeClass(offs).addClass(off);
    $(gamesList[game]).addClass(on).removeClass(offs);//adds on to ids, off to others
 // alert("Moves needed" +gamesList[game].moves);
     }, 150);
  
    
   console.log(game);
}

//toggle lights
$(".square").click(function() {
  var clickedSquare = $(this).attr("id").slice(1); //onClick grab id and run through toggle function
  toggleAround(clickedSquare);
});

//create random game
function randomGame() {
   $(".square").fadeOut(100).delay(200).fadeIn();
  document.getElementById("game-name").innerText = "Random Game";
  
  var randomLength = Math.floor(Math.random() * 25) + 1;
  var randomArray = [];
  var randomNumber;
  var i = 0;
  while (i < randomLength) {
    randomNumber = Math.floor(Math.random() * 25) + 1;
    randomArray.push("#s" + randomNumber/*.toString()*/);
    i++;
  }
 // $(randomArray.join()).addClass(on).removeClass(off);// it's on or off
   setTimeout(function(){
      $(".square").removeClass(ons).removeClass(offs).addClass(off);
    $(randomArray.join()).addClass(on).removeClass(offs);//adds on to ids, off to others
 // alert("Moves needed" +gamesList[game].moves);
      $("#s13").removeClass("tutorial");//clear tutorial "X"*/
     }, 150);
  game = -1;
  
}

console.log(gamesList.randomGameSquares);
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
//onOff("#1");
function Bye(cell){
  $(cell).fadeOut();
}
function Hi(cell){
  $(cell).fadeIn();
}
function cellChange(cell,animateClass){
  $(cell).toggleClass(animateClass);
}

var onAnimate= on;
function showWin(){
  console.log("win"+onAnimate);
   document.getElementById("game-name").innerText = "You won game " + game +"!";
  //make game name= "You won!" drawGame puts back name
  var time=150;
  squaresArray.forEach(function(square){
    setTimeout(function(){
      Bye(square);
               }, time);
    time+=50;
  })
   squaresArrayReverse.forEach(function(square){
    setTimeout(function(){
      Hi(square);
               }, time);
    time+=50;
  })
  /*
   squaresArray.forEach(function(square){
    setTimeout(function(){
     cellChange(square)
               }, time);
    time+=50;
  })*/
 //  $(".square").toggleClass(on, time).toggleClass(off, time+100);
 /*   (square).fadeOut(time);
    time+=250;
  });*/
 /* setTimeout(function(){
    $(".square").addClass(on);
  }, time);
  
  time+=50;*/
 for(var i=0; i<2; i++){
  squaresArray.forEach(function(square, animateClass){
   setTimeout(function(){
     cellChange(square,gameLevelColor);
   }, time) ;
    time+=25;
    
  });
 }

  
  time+=75;
  
  for(var i=0; i<6; i++){
   setTimeout(function(){
      cellChange($(".square"),gameLevelColor);
   }, time) ;
  
    time+=250;
  }
  
  time+=250;
  setTimeout(chooseNext, time)
}
//Missing NICE TO HAVES
/*
-theme
make it all jquery or javascript
ids should start with letters. 
***make next a function (won) if won->show different confirm message. trigger this function on #Next click, rather than it having its own function. 
***light up animation on win. 
-Add animation on click and toggle
X-Add shadows, make pretty
DONE- A random game. Push random numbers to array random number less than or equal to 25 long
-Show number of moves done over min number of moves needed. If this, option to turn this off "relaxed"
- count moves against least number of moves required->points
DONE- nicer to find a way to attach least moves and other info to a game - object
*/