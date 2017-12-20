var size= 5;

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
    alert("winner");
    //option to play again vs next game
  }
}


$(".square").click(function(){
 var clickedSquare=  $(this).attr('id'); //onClick grab id and run through toffle function
  toggleAround(clickedSquare);
                   });


/*important

winable game levels added
function game1(){
  //create 1st pattern which will be set before any JS runs
}

*/
/*NICE TO HAVES
- customizable size/ easy, medium, hard sizes || how this will work with winable games?
- count moves against least number of moves required->points
- 
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