// JavaScript Document

document.body.addEventListener("load", changeBg);
var i=1;
function changeBg(){
    document.body.style.backgroundImage="url(../img/body/bg"+i+".jpg)";
    i++;
    if(i==10)
    i=1;
}
var a=setInterval(changeBg,9000);

