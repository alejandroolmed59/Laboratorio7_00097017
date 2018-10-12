var container= document.getElementById("c1");
container.innerText="Hola mundo!";
container.style.backgroundColor = "#000000";
container.style.color= "#1cb723";
container.style.width="200px";
container.style.height="200px";
container.innerHTML= "<input type = text placeholder = 'Escriba su texto'>";

var containers = document.getElementsByClassName("c2");


Array.from(containers).forEach(function(item) {
    item.style.backgroundColor = "#009999";
    item.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
    item.style.margin = "20px";
 });

 var boton = document.getElementById("btn-click");
 boton.onclick= function(evt) 
 { 
 alert("Hola mundo!"); 
 }

var btnCopy =  document.getElementById("btnCopy");

btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
} 