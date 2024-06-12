
var rn1=Math.floor(Math.random()*6+1);
var rdi="dice"+rn1+".png";
var randomimgsrc= "images/"+rdi;

var image1= document.getElementsByClassName("img1")[0];

image1.setAttribute("src",randomimgsrc);

var rn2=Math.floor(Math.random()*6+1);
var randomdiceimgsrc2="images/dice"+rn2+".png";

var image2=document.getElementsByClassName("img2")[0];
image2.setAttribute("src",randomdiceimgsrc2);


if(rn1>rn2){
document.querySelector("h1").innerHTML="player 1 wins!";

}else if(rn2>rn1){
document.querySelector("h1").innerHTML=("player 2 wins!");

}else{
    document.querySelector("h1").innerHTML=("Draw!");
}

