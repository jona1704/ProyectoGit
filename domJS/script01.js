// Crear Arreglo de Items
const items = ["Elemento 1", "Elemento 2", "Elemento 3"];
// Creando un contenedor
const div = document.createElement("div");
div.style.backgroundColor = "#E4A799";
div.style.width = "100%";
div.style.height = "120px";
// Creando un encabezado (Heading)
const h3_ = document.createElement("h3");
h3_.textContent = "Lista no Ordenada DOM";
div.appendChild(h3_);
// Creando una lista no ordenada
const listaNO = document.createElement("ul");
listaNO.style.listStyleType = "square";
const item1 = document.createElement("li");
item1.style.fontSize = "20px";
item1.innerHTML = items[0];
listaNO.appendChild(item1);
const item2 = document.createElement("li");
item2.style.fontSize = "20px";
item2.innerHTML = items[1];
listaNO.appendChild(item2);
const item3 = document.createElement("li");
item3.style.fontSize = "20px";
item3.innerHTML = items[2];
listaNO.appendChild(item3);
div.appendChild(listaNO);
// Insertando div al body
document.body.appendChild(div);