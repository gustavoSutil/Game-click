//Need:
//Time check
//menu of start
//graphic of statistic
//remove the pointer mause
//criar cor variavel no menu

let totalPoints = 0;
var box = document.getElementById("square");

function requestFullScreen() {

    var el = document.body;
  
    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
    || el.mozRequestFullScreen || el.msRequestFullScreen;
  
    if (requestMethod) {
  
      // Native full screen.
      requestMethod.call(el);
  
    } else if (typeof window.ActiveXObject !== "undefined") {
  
      // Older IE.
      var wscript = new ActiveXObject("WScript.Shell");
  
      if (wscript !== null) {
        wscript.SendKeys("{F11}");
      }
    }
}

//number random of coo of screen 
function getRandomInt(max){
    let num = Math.random();
    num *= max;
    if (num<25){
        return 0;
    }else if(num>(max-25)){
        return (max-25);
    }
    num = Math.ceil(num);
    return num;
}

//replace new coo of the last
function insertBox(){
    requestFullScreen();
    let lar = window.screen.width;
    let alt = window.screen.height;
    positionX = getRandomInt(lar);
    positionY = getRandomInt(alt);
    let pLeft = positionX + "px";
    let pTop = positionY + "px";
    box.style.marginLeft = pLeft;
    box.style.marginTop = pTop;
}

function timeCheck(){
    const start = new Date();
    let time = start.getTime();
    
}

function atualize(point){
    if (totalPoints==0){
        let menu = document.getElementById("menuInit");
        menu.remove();
    }
    totalPoints+=point;
    score = document.getElementById("score");
    score.innerHTML =  totalPoints;
    insertBox();
}


function startMenu(){
    let tagSize = document.getElementById("sizePilxels");
    numSize = tagSize.value;
    box.style.width = numSize + "px";
    box.style.height = numSize + "px";
    textPoints = document.getElementById("score");
    textPoints.style.sizeLetter = numSize + "px";

}