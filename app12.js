 


 var objetoJS = {
 	nombre:"Samuel",
 	edad:30
 };

 console.log( "Objeto literal", objetoJS );

 var jsonString = JSON.stringify( objetoJS ); // JSON.stringify convierte un objeto(por ejemplo) a formato JSON 

 console.log( jsonString );

 var objetoDesdeJson = JSON.parse( jsonString ); // JSON.parse convierte un formato JSON a un objeto(por ejemplo) 

 console.log( objetoDesdeJson );