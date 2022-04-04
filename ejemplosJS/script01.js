let articulos = [];
let headers = ["ID","Nombre","Precio"];

window.addEventListener('DOMContentLoaded', function(){
    let boton = document.querySelector('#enviar');
    boton.addEventListener("click", desplegar);
});

function desplegar(event){
    let valor = document.getElementById('info').value;
    let precio = document.getElementById('precio').value;
    if(valor.length === 0){
        let msg = document.querySelector('#mensaje');
        msg.innerHTML = 'Ingrese contenido';
    } else{
        let articulo = {
            id: Date.now(),
            nombre: valor,
            precio: precio
        };
        articulos.push(articulo);
       
        let contenido = document.getElementById('contenido');
        // contenido.innerHTML = `\n${JSON.stringify(articulos)}`;
        // JSON.stringify convierte un arreglo de objetos a cadena

        // Crearemos una tabla para almacenar la informacion de 
        // la cadena de objetos
        let tabla = document.createElement("table");
        tabla.setAttribute("id","miTabla");
        let filaHeaders = document.createElement("tr");
        // Llenando las cabeceras
        headers.forEach(texto => {
            let th =  document.createElement("th");
            let crearTexto = document.createTextNode(texto);
            th.appendChild(crearTexto);
            filaHeaders.appendChild(th);  
        });

        tabla.appendChild(filaHeaders);
        contenido.appendChild(tabla);
    }
    
    event.preventDefault();
}