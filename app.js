let operator=document.querySelectorAll(".operator");
let num=document.querySelectorAll(".number");
let clear=document.querySelector("[data-all-clear]");
let backspace=document.querySelector("[data-delete]");
let previousOutput=document.querySelector("[data-pre-output]");
let currentOutput=document.querySelector(".current-output");
let equal=document.getElementById("equal");



num.forEach(button=>{
    button.addEventListener("click", function(){
    currentOutput.innerHTML+=button.innerHTML;  
    })
})

operator.forEach(button=>{
    if(button==equal){
        button.onclick=function(){
    return currentOutput.innerHTML=eval(currentOutput.innerHTML);
        }
    }else if(button==backspace){
        button.onclick=function(){
        currentOutput.innerHTML=currentOutput.innerHTML.substr(0, currentOutput.innerHTML.length-1);
        }
    }
    else{
    button.addEventListener("click", function(){
    currentOutput.innerHTML+=button.innerHTML;  
    })}
})

clear.onclick=function(){
    currentOutput.innerHTML="";
}


