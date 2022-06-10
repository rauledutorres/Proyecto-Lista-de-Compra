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

		for (let i = 0; i < list.length; i++){
			let row = tbody.insertRow(i);

		row.innerHTML = list[i];//.nombreMercado;

		tbody.appendChild(row);
		}
	}