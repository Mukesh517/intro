const increasebtn=document.getElementById("increase")
const decreasebtn=document.getElementById("decrease")
const reset=document.getElementById("reset")
const label=document.getElementById("we")
let count=0;


increasebtn.onclick=function(){
    count++;
    label.textContent=count;

}
decreasebtn.onclick=function(){
    count--;
    label.textContent=count;

}
reset.onclick=function(){
    count=0;
    label.textContent=count;

}
