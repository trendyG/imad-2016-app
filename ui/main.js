console.log('Loaded!');

//change the text of main-text div
var element=document.getElementById("main-text"
);

element.innerHTML="New Value";

//move the image

var img=document.getElementById("madi");
function moveRight() {
    marginLeft=marginLeft + 10;
    img.style.marginLeft = marginLeft + "px";
}
img.onclick=function(){
    var interval=setInterval(moveLeft,100);
    };