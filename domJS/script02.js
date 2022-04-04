// Crear Arreglo de Items
const items = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];
// Creando un contenedor
const div = document.createElement("div");
div.style.backgroundColor = "#E4A799";
div.style.width = "100%";
div.style.height = "140px";
// Creando un encabezado (Heading)
const h3_ = document.createElement("h3");
h3_.textContent = "Lista no Ordenada DOM";
div.appendChild(h3_);
// Creando una lista no ordenada
const listaNO = document.createElement("ul");
listaNO.style.listStyleType = "circle";
// Iterando sobre el arreglo
items.forEach(function(elemento){
    const item = document.createElement("li");
    item.style.fontSize = "20px";
    item.innerHTML = elemento;
    listaNO.appendChild(item);
});
div.appendChild(listaNO);
// Insertando div al body
document.body.appendChild(div);