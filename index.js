let num = 0;
function increase1(){
    num++;
    print = document.getElementById("homeScore").value= num;
}
function increase2(){
    num += 2;
    print = document.getElementById("homeScore").value= num;
}
function increase3(){
    num += 3;
    print = document.getElementById("homeScore").value= num;
}
 let num2 = 0;
function increase12(){
    num2++;
    print = document.getElementById("Guestscore").value= num2;
}
function increase22(){
    num2 += 2;
    print = document.getElementById("Guestscore").value= num2;
}
function increase32(){
    num2 += 3;
    print = document.getElementById("Guestscore").value= num2;
}

function reset(){
    num = 0;
    print = document.getElementById("homeScore").value= num;
    num2 = 0;
    print = document.getElementById("Guestscore").value= num2;
}
