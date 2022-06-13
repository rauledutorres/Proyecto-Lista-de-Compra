//El usuario registra sus productos y se imprimen en tabla

// Variables para registrar producto
	const nombreProducto = document.getElementById("nombreProducto");
	const btnAddProducto = document.getElementById("btn-addProducto");
	const productos = [
	{nombreProducto:[LOQUETENEMOS en LocalStorage súpers]},]

// Avisamos al evento
	btnAddProducto.addEventListener('click', addProducto);

// Variables para imprimir tabla
	const tabla = document.querySelector("#tabla");

	//bucle para filas
	const fila = document.createElement("tr");
		//bucle celdas
		const celdas = document.createElement("td");

