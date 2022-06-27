document.getElementById("button").addEventListener('click',function(){
    document.querySelector(".share").style.display='flex';
    document.getElementById("close-button").style.display='inline-block';
    document.getElementById("button").style.display='none';
});

function init(){
   document.querySelector(".share").style.display='none';
   document.getElementById("button").style.display='inline-block';
   document.getElementById("close-button").style.display='none'; 
};

document.getElementById("close-button").addEventListener('click',init);
document.getElementById("close-button2").addEventListener('click',init);