var size= 5;
var game=1;

function toggleAround(clicked){
  
var numClick= Number(clicked);// if this is not converted to a number, we get bad math (5+3=53)
  
var center = document.getElementById(numClick);
    center.classList.toggle("on");


if(numClick%size!=0 && numClick+1<=size*size){//if not at end of row
 var right = document.getElementById(numClick+1);
    right.classList.toggle("on");
}

  if(numClick%size!=1  && numClick-1>0){//if not at beginning of row
 var left = document.getElementById(numClick-1);
    left.classList.toggle("on");
  }
  
  if(numClick+size<=size*size){//if not last row
 var below = document.getElementById(numClick+size);
    below.classList.toggle("on");
  }
 
 if(numClick-size>0){ //if not first row
 var above = document.getElementById(numClick-size);
    above.classList.toggle("on");
 } 
  
   var allOff= $("div").hasClass( "on" );
  if(allOff==false){
  chooseNext();
    
  }
}

function chooseNext(){
  
   if( confirm(" You won! Play next game?")){
   game++;
     drawGame(game);
   document.getElementById("game-name").innerText="Game " + game;
    // document.getElementById("least-moves").innerText= 
    }
  
    else{
     document.getElementById("game-name").innerText= "Choose a game to continue.";
    }
}


function drawGame(game){
 $(".square").removeClass("on");            
  switch (game){
  case (2):  $("#1").addClass("on");
      
      break;
    case(3):
  $("#2").addClass("on");  
      break;
  }

};

$(".square").click(function(){
 var clickedSquare=  $(this).attr('id'); //onClick grab id and run through toffle function
  toggleAround(clickedSquare);
                   });


$("p").click(function(){
game++;
//alert(game);
drawGame(game);
             });

//choose level
$(".game-level").click(function(){
  var gameString=  String($(this).attr('id'));
  var gameLevelId= gameString.slice(0, -1);
 var gameLevelChoice= Number(gameLevelId);
  drawGame(gameLevelChoice);
})

//drawGame();

/*important

winable game levels added

}

*/
/*Missing NICE TO HAVES
//
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