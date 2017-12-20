var s1= document.getElementById("1");
var s2= document.getElementById("2");
var s3= document.getElementById("3");
var s4= document.getElementById("4");
var s5= document.getElementById("5");
var s6= document.getElementById("6");
var s7= document.getElementById("7");
var s8= document.getElementById("8");
var s9= document.getElementById("9");

var size= 3;

function toggleAround(clicked){
  
   var element = document.getElementById(clicked);
    element.classList.toggle("on");
  
 var id1= clicked+1
 var element = document.getElementById(id1);
    element.classList.toggle("on");
  
   var id2= clicked-1
 var element = document.getElementById(id2);
    element.classList.toggle("on");
  
   var id3= clicked+size
 var element = document.getElementById(id3);
    element.classList.toggle("on");
  
   var id4= clicked-size
 var element = document.getElementById(id4);
    element.classList.toggle("on");
  alert(clicked);
}

s1.onclick= ()=>toggleAround(1);
s2.onclick= ()=>toggleAround(2);
s3.onclick= ()=>toggleAround(3);
s4.onclick= ()=>toggleAround(4);
s5.onclick= ()=>toggleAround(5);
s6.onclick= ()=>toggleAround(6);
s7.onclick= ()=>toggleAround(7);
s8.onclick= ()=>toggleAround(8);
s9.onclick= ()=>toggleAround(9);