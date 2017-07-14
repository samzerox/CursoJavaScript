var Persona = function(){
	this.nombre = "Sam";
	this.apellido = "alcaraz";
	this.edad = 28;
};
	var juan = new Persona();

	Persona.prototype.direccion = "Valle Real";


	for(prop in juan){

		console.log( juan.hasOwnProperty( prop ) ); //muestra true o false si son o no del prototipo(en este caso muestra que direccion no es del prototipo)

		console.log(prop, ":", juan[prop] );
	}


	for (num in [1,2,3,4,5,6,7,8,9,10] ){
		console.log(num);
	}

	[1,2,3,4,true,6,7,8,9,"nombre"].forEach(function( val ){
		console.log( val );
	});
