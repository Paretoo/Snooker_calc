window.onload = function() {
    document.getElementById("box1").value = points;
    document.getElementById("box2").value = points;
    
};

var points = 0;
var points2 = 0;

// Dodawanie punktów dla gracza #1

document.getElementById("red1").addEventListener("click", score1);
function score1() {
    document.getElementById("box1").value = points+=1;
};

document.getElementById("yellow1").addEventListener("click", score2);
function score2() {
    document.getElementById("box1").value = points+=2;
};

document.getElementById("green1").addEventListener("click", score3);
function score3() {
    document.getElementById("box1").value = points+=3;
};

document.getElementById("brown1").addEventListener("click", score4);
function score4() {
    document.getElementById("box1").value = points+=4;
};

document.getElementById("blue1").addEventListener("click", score5);
function score5() {
    document.getElementById("box1").value = points+=5;
};

document.getElementById("pink1").addEventListener("click", score6);
function score6() {
    document.getElementById("box1").value = points+=6;
};

document.getElementById("black1").addEventListener("click", score7);
function score7() {
    document.getElementById("box1").value = points+=7;
};

// Dodawanie punktów dla gracza #2

document.getElementById("red2").addEventListener("click", score8);
function score8() {
    document.getElementById("box2").value = points+=1;
};

document.getElementById("yellow2").addEventListener("click", score9);
function score9() {
    document.getElementById("box2").value = points+=2;
};

document.getElementById("green2").addEventListener("click", score10);
function score10() {
    document.getElementById("box2").value = points+=3;
};

document.getElementById("brown2").addEventListener("click", score11);
function score11() {
    document.getElementById("box2").value = points+=4;
};

document.getElementById("blue2").addEventListener("click", score12);
function score12() {
    document.getElementById("box2").value = points+=5;
};

document.getElementById("pink2").addEventListener("click", score13);
function score13() {
    document.getElementById("box2").value = points+=6;
};

document.getElementById("black2").addEventListener("click", score14);
function score14() {
    document.getElementById("box2").value = points+=7;
};
