const dec= document.getElementById("dec");
const reset= document.getElementById("reset");
const inc=document.getElementById("inc");
const countlabel= document.getElementById("countlabel");
let count=0;

inc.onclick=function(){
    count++;
    countlabel.textContent=count;
}
dec.onclick=function(){
    count--;
    countlabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}