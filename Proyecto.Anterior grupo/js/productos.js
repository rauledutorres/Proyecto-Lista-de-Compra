// Productos propuestos en la lista de la compra. array de objetos.

	const productosMercadona =[
		{nombre: 'Plátanos', precio: 2, tienda: 'Mercadona', tipo: 'productos frescos'}, //el image no funcionaba
		{nombre: 'Pera', precio: 1.89, tienda: 'Mercadona', tipo: 'productos frescos'},
		{nombre: 'Manzana', precio: 2.10, tienda: 'Mercadona', tipo: 'productos frescos'},
		{nombre: 'Zanahorias', precio: 0.89, tienda: 'Mercadona', tipo: 'productos frescos'},
		{nombre: 'Arándanos', precio: 3.80, tienda: 'Mercadona', tipo: 'congelados'},
		{nombre: 'Apio', precio: 1.89, tienda: 'Mercadona', tipo: 'productos frescos'},
		{nombre: 'Bananas', precio: 1.90, tienda: 'Mercadona', tipo: 'productos frescos'},
		{nombre: 'Lentejas', precio: 1.89, tienda: 'Mercadona', tipo: 'legumbre'},
		{nombre: 'Tofu', precio: 2.50, tienda: 'Mercadona', tipo: 'legumbre'},
		{nombre: 'Seitán', precio: 3.40, tienda: 'Mercadona', tipo: 'legumbre'},
		{nombre: 'Avena', precio: 2.10, tienda: 'Mercadona', tipo: 'desayuno'},
		{nombre: 'Gofio', precio: 2.30, tienda: 'Mercadona', tipo: 'desayuno'},
		{nombre: 'Tomates', precio: 1.86, tienda: 'Mercadona', tipo: 'productos frescos'},
		{nombre: 'Lechuga', precio: 0.98, tienda: 'Mercadona', tipo: 'productos frescos'},
		{nombre: 'Garbanzos', precio: 1.98, tienda: 'Mercadona', tipo: 'legumbre'},
		{nombre: 'Alubias rojas', precio: 1.79, tienda: 'Mercadona', tipo: 'legumbre'},
		{nombre: 'Alubias', precio: 1.79, tienda: 'Mercadona', tipo: 'legumbre'},
	]

	const productosVeggieRoom =[
		{nombre: 'Lentejas rojas', precio: 2, tienda: 'VeggieRoom', tipo: 'legumbre'},
		{nombre: 'Azuki', precio: 2.60, tienda: 'VeggieRoom', tipo: 'legumbre'},
		{nombre: 'Lino', precio: 2, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Sésamo', precio: 2, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Leche de anacardos', precio: 2.10, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Leche de almendras', precio: 1.98, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Leche de soja sin azúcares añadidos', precio: 2.99, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Leche de soja Calcio', precio: 3.10, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Tofu', precio: 2, tienda: 'VeggieRoom', tipo: 'legumbre'},
		{nombre: 'Seitán', precio: 2.60, tienda: 'VeggieRoom', tipo: 'legumbre'},
		{nombre: 'Avena', precio: 2, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Gofio', precio: 2, tienda: 'VeggieRoom', tipo: 'desayuno'},
		{nombre: 'Chucrut', precio: 3.70, tienda: 'VeggieRoom', tipo: 'conservas'},
		{nombre: 'Chucrut con remolacha', precio: 4, tienda: 'VeggieRoom', tipo: 'conservas'},
		{nombre: 'Garbanzos', precio: 2.60, tienda: 'VeggieRoom', tipo: 'legumbre'},
		{nombre: 'Alubias', precio: 2.60, tienda: 'VeggieRoom', tipo: 'legumbre'},
		{nombre: 'Kimchi', precio: 3.29, tienda: 'VeggieRoom', tipo: 'conservas'},
	]

	const productosLidl =[
		{nombre: 'Lentejas rojas', precio: 2, tienda: 'Lidl', tipo: 'legumbre'},
		{nombre: 'Guisantes', precio: 3, tienda: 'Lidl', tipo: 'legumbre'},
		{nombre: 'Habas', precio: 2.70, tienda: 'Lidl', tipo: 'legumbre'},
		{nombre: 'Crema de cacahuete', precio: 2.50, tienda: 'Lidl', tipo: 'desayuno'},
		{nombre: 'Crema de cacahuete crunchy', precio: 3, tienda: 'Lidl', tipo: 'desayuno'},
		{nombre: 'Leche de almendras', precio: 2.09, tienda: 'Lidl', tipo: 'desayuno'},
		{nombre: 'Leche de soja sin azúcares añadidos', precio: 1.19, tienda: 'Lidl', tipo: 'desayuno'},
		{nombre: 'Leche de soja Calcio', precio: 1.90, tienda: 'Lidl', tipo: 'desayuno'},
		{nombre: 'Tofu', precio: 3, tienda: 'Lidl', tipo: 'legumbre'},
		{nombre: 'Seitán', precio: 5, tienda: 'Lidl', tipo: 'legumbre'},
		{nombre: 'Avena', precio: 2, tienda: 'Lidl', tipo: 'desayuno'},
		{nombre: 'Gofio de maíz', precio: 2, tienda: 'Lidl', tipo: 'desayuno'},
		{nombre: 'Chucrut', precio: 2.60, tienda: 'Lidl', tipo: 'conservas'},
		{nombre: 'Chucrut con remolacha', precio: 2.70, tienda: 'Lidl', tipo: 'conservas'},
		{nombre: 'Garbanzos', precio: 1.60, tienda: 'Lidl', tipo: 'legumbre'},
		{nombre: 'Alubias', precio: 1.50, tienda: 'Lidl', tipo: 'legumbre'},
		{nombre: 'Aceitunas', precio: 1.87, tienda: 'Lidl', tipo: 'conservas'},
	]

	const formulario = document.querySelector('#formulario');
	const boton = document.querySelector('#boton');
	const resultado = document.querySelector('#resultado');
	//var x=document.querySelector("#formulario").value;
	//console.log(x);
	const filtrar =()=>{
		//console.log(formulario.value); prueba de que funciona 
		resultado.innerHTML ='';

	//if(x!==""){
		function filtro(){
		const texto = formulario.value.toLowerCase(); //para guardar el texto del usuario y que no importen mayúsc.
		
		//BUSCAR cómo quitar tildes al buscar... crear constante tildes y luego ´QUÉ??¿

		for(let productoMercadona of productosMercadona){ //para extraer producto completo de nuestra lista
			let nombreMercadona = productoMercadona.nombre.toLocaleLowerCase();
			if(nombreMercadona.indexOf(texto) !== -1){ //se busca cualquier cosa que vaya escribiendo el usuario
				resultado.innerHTML += `
					<li>${productoMercadona.nombre} - ${productoMercadona.precio}€ - ${productoMercadona.tienda}</li>  
				` //Cada vez que se encuentre algo, se concatena todo el array
			}
		}

		for(let productoVeggieRoom of productosVeggieRoom){ 
					let nombreVeggieRoom = productoVeggieRoom.nombre.toLocaleLowerCase();
					if(nombreVeggieRoom.indexOf(texto) !== -1){ 
						resultado.innerHTML += `
							<li>${productoVeggieRoom.nombre} - ${productoVeggieRoom.precio}€ - ${productoVeggieRoom.tienda}</li>  
						`
					}
				}

		for(let productoLidl of productosLidl){ 
					let nombreLidl = productoLidl.nombre.toLocaleLowerCase();
					if(nombreLidl.indexOf(texto) !== -1){ 
						resultado.innerHTML += `
							<li>${productoLidl.nombre} - ${productoLidl.precio}€ - ${productoLidl.tienda}</li>  
						`
					}
				}
	
		
		if(resultado.innerHTML === ''){
				resultado.innerHTML += `
				<li>Producto no encontrado</li>` 
				}
			}	
			filtro();
		//}															
	}

	boton.addEventListener('click', filtrar) //Cuando se pulse el botón, se filtra en el buscador el producto. CAMBIARLO, QUE SEA PARA AÑADIR A CARRITO...
	formulario.addEventListener('keyup', filtrar) //Rastrea letra por letra

	filtrar();

	// Para la función COMPRAR(), que dándole al botón se pueda hacer