wordlisttchangeto=["ABOUT ME"]

symbol_list = ["!","@","#","$","%","^","&","*","("
,")","-","_","=","+","[","]","{","}","|",";",":","'","<",">",",",".","?","/","~","`","\\","\"","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
"y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",];
//like this https://codepen.io/HikwaMehluli/pen/ebpxNZ

document.addEventListener('DOMContentLoaded', function() {
 const l1 = document.getElementById("letter1");
 const l2 = document.getElementById("letter2");
 const l3 = document.getElementById("letter3");
 const l4 = document.getElementById("letter4");
 const l5 = document.getElementById("letter5");
 const l6 = document.getElementById("letter6");
const l7 = document.getElementById("letter7");
const l8 = document.getElementById("letter8");
    



random=setInterval(function() {
    for(let i=0; i<5; i++){
        l1.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
        l2.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
        l3.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
        l4.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
        l5.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
        l6.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
        l7.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
        l8.innerHTML=symbol_list[Math.floor(Math.random() * symbol_list.length)];
    }
}, 10);


setTimeout(function() {
    clearInterval(random);
    l1.innerHTML = wordlisttchangeto[0][0];
    l2.innerHTML = wordlisttchangeto[0][1];
    l3.innerHTML = wordlisttchangeto[0][2];
    l4.innerHTML = wordlisttchangeto[0][3];
    l5.innerHTML = wordlisttchangeto[0][4];
    l6.innerHTML = wordlisttchangeto[0][5];
    l7.innerHTML = wordlisttchangeto[0][6];
    l8.innerHTML = wordlisttchangeto[0][7];
}, 5000);

});