//Se generan las variables que se van a utilizar para almacenar los datos

const inputProducto = document.getElementsByClassName("nombreProducto")[0];
const addProduct = document.getElementsByClassName("btn-addProducto")[0];

//A través del botón, se almacenan los datos en la base de datos local

addProduct.addEventListener('click', function (){

    if(inputProducto.value.trim()!=0){
        let localProducts = JSON.parse( localStorage.getItem('localProduct'));
        if(localProducts === null){
            listaProducts = [];
        }else{
            listaProducts = localProducts
        }
        listaProducts.push(inputProducto.value);
        localStorage.setItem('localProduct', JSON.stringify(listaProducts));
 }
     dibujarTabla();
 })

//Luego se imprimen esos datos (como comprobación, cuando se haga la tabla esto no será necesario)

/* Function showlist, sin utilidad actual pero paso necesario en la comprobación.

    function showlist(){

        let html = '';
        let listaProductsShow = document.querySelector('.listaProductos');
        let localProducts = JSON.parse(localStorage.getItem('localProduct'));
        if(localProducts === null){
            listaProducts = []
        }else{
            listaProducts = localProducts;
        }
      listaProducts.forEach((data, index) => {
        html += `
        <div class="Lista"
        <p class ="pText">${data}</p>
        <button class="delete" onClick="deleteItem(${index})">x</button>
        </div>
        `
      });
      listaProductsShow.innerHTML = html;
      dibujarTabla();
    };
*/

function deleteItem(index){

    if (confirm("¿Estás seguro/a?")){
    let localProducts = JSON.parse(localStorage.getItem('localProduct'));
    listaProducts.splice(index, 1);
    localStorage.setItem('localProduct', JSON.stringify(listaProducts));
    showlist();
    }
}

function dibujarTabla(){ 

    var tbody = document.querySelector('#tablaProductos');
    tbody.innerHTML = '';

    //Parte correspondiente a productos

    var productoRecup = JSON.parse(localStorage.getItem('localProduct'));
    console.log(productoRecup);

    //var nCantidadProductos = productoRecup.length;

    var superRecup = JSON.parse(localStorage.getItem('localExtraSuper'));

    for (let i = 0; i < productoRecup.length; i++){ 

        var fila = tbody.insertRow(i);

        fila.innerHTML = productoRecup[i];
        tbody.appendChild(fila);

            for (let j = 0; j < superRecup.length; j++){ 

                    var celdaSupers = document.createElement('td');
                    var checkboxInput = document.createElement('input')
                    var nodoTextoSupers= document.createTextNode(superRecup[j]);
                    var inputNum = document.createElement("input")
                    var logoCar = document.createElement("img")
                    var botonX = document.createElement("button");

                    botonX.textContent = "X";
                    
                    celdaSupers.appendChild(nodoTextoSupers);
                    celdaSupers.appendChild(checkboxInput);
                    celdaSupers.appendChild(inputNum);

                    fila.appendChild(celdaSupers);

                    checkboxInput.setAttribute("type", "checkbox");
                    checkboxInput.setAttribute("value", superRecup[j]);
                    checkboxInput.setAttribute("id", superRecup[j]);

                    inputNum.setAttribute("type","number");

                    logoCar.setAttribute("onclick", "addProduLista()")
                    logoCar.setAttribute("class", "logoCarro")
                    logoCar.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/107/107831.png")

                    botonX.setAttribute("onlcick", "deleteItem()");

            }        

        tbody.appendChild(logoCar);
        tbody.appendChild(botonX)
    }

   //Parte correspondiente a supers
    

    //var nCantidadSupers = superRecup.length;
}

// Llamar, para evitar la pérdida de datos en la recarga de la página

function llamar(){

    if(localStorage.getItem("localProduct")!==null)

    {   //var caja1=document.querySelector(".listaProductos");

        listaProducts = JSON.parse(localStorage.getItem("localProduct"));
        console.log(listaProducts);

        let html = '';
        let listaProductsShow = document.querySelector('.listaProductos');
       
      listaProducts.forEach((data, index) => {
        html += `
        <div class="Lista"
        <p class ="pText">${data}</p>
        <button class="delete" onClick="deleteItem(${index})">x</button>
        </div>
        `
      });
      listaProductsShow.innerHTML = html;
    }
}

llamar();


//Intento de envío de datos para conformar la lista principal

function addProduLista(){

    alert("funciona");

    //var mercadoElegido = JSON.parse(localStorage.getItem('localExtraSuper'));
    var x = document.getElementById("mercadona");
    console.log(x);
}