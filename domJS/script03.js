// Crear Arreglo de Items
const items = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];
// Creando un contenedor
const div = document.createElement("div");
div.style.backgroundColor = "#E4A799";
div.style.width = "500px";
div.style.height = "600px";
div.style.margin = "0 auto";
div.style.border = "1px solid black";
div.style.padding = "10px"
// Creando Imagen
const imagen = document.createElement('img');
imagen.src = '../ImagenesJS/Unknown.jpeg';
imagen.style.display = "block";
imagen.style.margin = "10px auto";
div.appendChild(imagen);
// Creando Parrafo 
const parrafo = document.createElement('p');
parrafo.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing 
elit. Veritatis dolorum architecto rerum eum corporis deleniti 
blanditiis minus, possimus iure? Sunt.`;
parrafo.style.marginTop = "10px";
parrafo.style.padding = "5px";
div.appendChild(parrafo);
// Creando header
const h3_ = document.createElement('h3');
h3_.textContent = "Lista Ordenada con Numeracion en Letras";
div.appendChild(h3_);
// Creando una lista ordenada
const listaO = document.createElement('ol');
listaO.type = "A";
// Iterando sobre el arreglo
items.forEach(function(elemento){
    const item = document.createElement("li");
    item.style.fontSize = "20px";
    item.innerHTML = elemento;
    listaO.appendChild(item);
});
div.appendChild(listaO);
// Creando header
const h3_2 = document.createElement('h3');
h3_2.textContent = "Lista Ordenada con Numeracion en Romanos";
div.appendChild(h3_2);
// Creando otra lista ordenada
const listaO_2 = document.createElement('ol');
listaO_2.type = "I";
// Iterando sobre el arreglo
items.forEach(function(elemento){
    const item = document.createElement("li");
    item.style.fontSize = "20px";
    item.innerHTML = elemento;
    listaO_2.appendChild(item);
});
div.appendChild(listaO_2);
// Insertando div al body
document.body.appendChild(div);