//Crear registro libre de productos. Con notación de JSON


	//Creamos objeto amigo para añadirle las propiedades

	let extraProductList =[];


	function addProduct(pproducto, pprecio, ptienda){

		let newProduct ={  
			producto : pproducto,
			precio : pprecio,
			tienda : ptienda
		};
		console.log(newProduct);
		extraProductList.push(newProduct); //Para que se añada en el array
		localStorageExtraProductList(extraProductList); 
	}

	//Hacemos que el nuevo objeto se añada a la base de datos local

	function getExtraProducList(){
		let storedList = localStorage.getItem('localExtraProductList');
		if (storedList == null){
			extraProductList = [];
		} else{
			extraProductList = JSON.parse(storedList); //En el caso de que haya datos, aparecerán en la lista
		}
		return extraProductList;
	}

	function localStorageExtraProductList(plist){
		localStorage.setItem('localExtraProductList', JSON.stringify(plist)); //con el JSON.stringify cambiamos a texto los datos para que se guarden en LocalStorage.
	}

	//Intento de quitar selección si fuera radio button (aunque lo que hace es que si seleccionas uno no puedas seleccionar otro)

	/*function unselect(){
  		document.querySelectorAll('[name=quitarSelect]').forEach((x) => x.checked=false);
	}*/
