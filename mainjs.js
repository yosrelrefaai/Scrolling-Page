let stars=document.getElementById("stars");
let moon=document.getElementById("moon");
let mountain3=document.getElementById("mountain3");
let mountain4=document.getElementById("mountain4");
let river=document.getElementById("river");
let boat=document.getElementById("boat");
let nouvel=document.querySelector('.nouvel');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value *3 + 'px';
    mountain3.style.top = value *2 +'px';
    mountain4.style.top = value * 1.5 +'px';
    river.style.top = value +'px';
    boat.style.left = value *3 +'px';
    nouvel.style.fontSize = value +'px';
    if(scrollY >=67){
        nouvel.style.fontSize = 67+'px';  
        nouvel.style.position = 'fixed';
        if(scrollY >=450){
            nouvel.style.display = 'none';
        }else{
            nouvel.style.display = 'block';     
        }    
    }
}