// Registro libre de supermercados con notación JSON.

	// Si haces click, se guarda el súper
	
	document.querySelector('#btn').addEventListener('click', saveSuper);

	function saveSuper(){
		let sSuper = document.querySelector('#nombreMercado').value;
		
		addSuper(sSuper);
		drawExtraSuper();
	}

	// Hacemos que se pinten como lista los nuevos súper
	
	function drawExtraSuper(){
		let list = getExtraSuper(),
			tbody = document.querySelector('#extraSuper tbody');

		tbody.innerHTML='';


		//elementoFalso.onclick = borrar


		for (let i = 0; i < list.length; i++){
			let row = tbody.insertRow(i);

			//row.innerHTML = list[i] + '<input type= "button">'; 
			//row.innerHTML = list[i] + '<img onclick="deleteSuper()" id="delete" src="delete.png">'; 
			row.innerHTML = list[i] + "<img onclick=\"delete_row(this,'"+list[i]+"')\" id=\"delete\" src=\"delete.png\">"; 
		// y en lugar de event, this
		tbody.appendChild(row) ;

		}
	}

// Para eliminar fila impresa

function delete_row(boton,texto)
{
		console.log(boton);
		console.log(texto);
	//let nombresuper=	event.path[1].firstChild;

    if (confirm("¿Estás seguro/a?")){

    	//boton.parentNode.parentNode.removeChild(e.parentNode);
			boton.parentNode.parentNode.removeChild(boton.parentNode); 
			//SIMPLIFICAR LO ANTERIOR. PARENTCHILD. VERLO
			let listasuper= localStorage.getItem('texto'); 

/*
				for(let i = 0; i < listasuper.lenght; i++){
					if (nombresuper.trim()==listasuper[i]){
						listasuper.splice(i);
					}
    		}
		*/
		}
	}

// ESTO SÍ FUNCIONABA
//Para eliminar fila impresa 

/*function delete_row(e)
{
    if (confirm("¿Estás seguro/a?")){
    e.parentNode.parentNode.removeChild(e.parentNode);
    }
}*/




	/*
	document.querySelector('#delete').addEventListener('click', deleteSuper);

	function deleteSuper(){
		let deleteSuper = document.querySelector('#nombreMercado').value;
		deleteSuper.target.parentNode.parentNode.removeSuper()
*/

	/*	for (var i = Things.length - 1; i >= 0; i--) {
			Things[i]
		}*/
	


/*
NO FUNCIONA
$(document).on('click', '#delete', function(deleteSuper) {
  deleteSuper.preventDefault();
  $(this).closest('td').remove();
});*/

/* 

Para borrar supermercados añadidos
	function addbtneliminar(){
		const eliminarbtn = document.createElement("button");

	    eliminarbtn.textContent = "Eliminar";
	    eliminarbtn.className= "btneliminar";

	    eliminarbtn.addEventListener("click", (e) =>{
	    	//e.target es el boton de eliminar, y con parentElement eliminamos el elemento adyacente.. 
	    	//No podemos eliminar un objeto del DOM directament, hay que eliminarlo desde 
	    	//desde el elemento padre, en este caso desde el ul(lista).
	    	let item = e.target.parentElement;
	        list.removeChild(item);
	    });
	    return eliminarbtn;
	}; */