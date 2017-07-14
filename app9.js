

var carro = {
	color: "blanco",
	marca: "Mazda",
	imprimir:function(){
		var salida = this.marca + " - " + this.color;
		return salida;
	}
}

var carro2 = {
	color: "rojo",
	marca: "Toyota"
}


console.log( carro.imprimir() );

var logCarro = function( arg1, arg2 ){
	console.log("Carro: ", this.imprimir() );
	console.log("Argumentos: ", arg1, arg2 );
	console.log("==========================" );
}

var logModelCarro = logCarro.bind( carro ); //con bind podemos decir a donde apuntar el this

logModelCarro("abc","xyz");





logModelCarro.call( carro,"123","456" ); // con call podemos llamar a las funciones de otros objetos
logModelCarro.apply( carro,[ "asd","qwe" ] ); //igual que call pero se usan []



console.log(carro.imprimir.call(carro2));