var arr = [5,4,3,2,1];
console.log( arr );

console.log( arr[0], arr[4], arr[5] );

arr.reverse();
console.log( arr );

arr = arr.map( function(elem){
	elem *= elem;
	return elem;
});
console.log( arr );

arr = arr.map( Math.sqrt );
console.log( arr );

arr = arr.join("|");
console.log( arr );



arr = arr.split("|");
console.log(arr)


arr.push("6");
console.log(arr);

arr.unshift("0");
console.log( arr );

console.log(arr.toString() );

var elimine = arr.pop();
console.log(arr, elimine);

arr.splice(1, 0,"10", "20", "30");
console.log(arr);

arr = arr.slice(1,4);
console.log(arr);




var arr = [

	true,
	{
		nombre:"sam",
		apellido: "alcaraz"
	},
	function(){
		console.log("Estoy viviendo en un arreglo");
	},
	function(persona){
		console.log(persona.nombre + " " + persona.apellido );
	},
	[
		"sam",
		"fernando",
		"melisa",
		"Hernaldo",
		[
			"Juan",
			"Pedro",
			"Dilcia",
			function(){
				console.log(this);
			}
		]
	]


];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);
arr[2]();
arr[3](arr[1]);
console.log(arr[4][4][1]);

var arreglo2 = arr[4][4];
arreglo2[1]="Pedra"
console.log(arreglo2);
console.log(arr);
arreglo2[3]();