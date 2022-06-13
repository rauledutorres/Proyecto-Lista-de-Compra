
// Creamos objeto con nuevos súper que haya apuntado el usuario

	let extraSuper = [];

	function addSuper(){
		let nuevoSuper = document.querySelector('#nombreMercado').value;
		extraSuper.push(nuevoSuper); // para que se añadan efectivamente al array
		localStorageExtraSuper(extraSuper); 
		//localStorage.setItem('extraSuper',JSON.stringify(extraSuper));
	}

// El objeto se añade a la base de datos local.
	
	function getExtraSuper(){
		let storedList = localStorage.getItem('localExtraSuper');
		if (storedList == null){
			extraSuper = [];
		} else{
			extraSuper = JSON.parse(storedList); //Si hay datos, saldrán en lista.
		} return extraSuper;
	}

function localStorageExtraSuper(slist){
	localStorage.setItem('localExtraSuper', JSON.stringify(slist)); 
}


