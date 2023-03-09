
function myfunction() {
	var copiartexto = document.getElementById("myinput"); 

copiartexto.select(); 
copiartexto.setSelectionRange(0, 99999); 

navigator.clipboard.writeText(copiartexto.value); 

alert("Copied the text: " + copiartexto.value); 
}

document.getElementById('boton').onclick = function () {
	console.log("Capturamos el evento click");
	document.getElementById("demo").innerHTML = "Saludos!"; 
}
