//Crear registro libre de productos. Con notación de JSON


	//Que se le llame a la función, al hacer click
	document.querySelector('#btnSaveProduct').addEventListener('click', saveProduct); 
	drawExtraProductoTable();

	//Y se guarde el producto
	function saveProduct(){
		let sProducto = document.querySelector('#txtProducto').value,
			sPrecio = document.querySelector('#txtPrecio').value,
			sTienda = document.querySelector('#txtTienda').value;
	
		addProduct(sProducto, sPrecio, sTienda);
		drawExtraProductoTable();

	}

	//Queremos que se dibuje en la tabla, y se añadan los elementos uno tras otro
	function drawExtraProductoTable(){
		let list = getExtraProducList(),
			tbody = document.querySelector('#extraProductoTable tbody');

		tbody.innerHTML = '';

		for(let i = 0; i < list.length; i++){
			let row = tbody.insertRow(i),
				productoCell = row.insertCell(0),
				precioCell = row.insertCell(1),
				tiendaCell = row.insertCell(2)
				selectCell = row.insertCell(3);

		productoCell.innerHTML = list[i].producto;
		precioCell.innerHTML = list[i].precio;
		tiendaCell.innerHTML = list[i].tienda;

		let inputSelect = document.createElement('input');
		inputSelect.type = 'checkbox';
		inputSelect.name = 'quitarSelect'; 
		inputSelect.value = list[i].id;
		selectCell.appendChild(inputSelect);


		tbody.appendChild(row);
		}
	}

	//Que el usuario pueda añadir el producto o eliminarlo
	//Ahora solo puede pulsar, pero no hace nada