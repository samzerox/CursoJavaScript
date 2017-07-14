

function evento(arg){
	console.log("Me dispare");
	console.log(arg);
}

var objeto = document.getElementById("objDemo");

objeto.addEventListener("click", evento);// para usar esta funcion el llamado al script del html debe estar en la parte de abajo

