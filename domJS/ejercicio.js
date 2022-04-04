// Arreglo
const arreglo = ["Elemento 1", "Elemento 2", "Elemento 3"];
// Crear el div
const div = document.createElement("div");
div.style.width = "500px";
div.style.height = "500px";
div.style.backgroundColor = "yellow";
// Nav
const nav = document.createElement("nav");
// Lista no ordenada
const ul = document.createElement("ul");
// Llenamos los <li>
arreglo.forEach(function(elemento){
    const li = document.createElement("li");
    li.innerHTML = elemento;
    ul.appendChild(li);
});
// ul como hijo de nav
nav.appendChild(ul);
// nav como hijo de div
div.appendChild(nav);
// div al body
document.body.appendChild(div);