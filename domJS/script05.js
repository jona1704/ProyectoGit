// Objeto
const mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
  ];
// Crear Encabezados de Table
const headers = ["Nombre", "Altura (Ft)", "Lugar"];
// Creando un contenedor
const div = document.createElement("div");
div.setAttribute("class", "contenedor");
// Insertando contenedor al body - Primero Inicializamos
document.body.appendChild(div);
// Accediendo al contenedor por clase - Despues accedemos por clase
const contenedor = document.querySelector(".contenedor");
contenedor.style.backgroundColor = "#E4A799";
contenedor.style.width = "500px";
contenedor.style.height = "600px";
contenedor.style.margin = "0 auto";
contenedor.style.border = "1px solid black";
contenedor.style.padding = "10px";
// Creando tabla
const tabla = document.createElement("table");
// Creando id de Tabla
tabla.setAttribute("id","miTabla");
// Insertando tabla a div
contenedor.appendChild(tabla);
// Accediendo a tabla por id
const miTabla = document.querySelector("#miTabla");
miTabla.style.margin = "0 auto";
miTabla.style.border = "1px solid black";
// Creando thead
const thead = miTabla.createTHead().insertRow();
headers.forEach((item, index) => {
    const th = thead.insertCell(index);
    let crearTexto = document.createTextNode(item);
    th.appendChild(crearTexto);
});
// Creando tbody
// No se usa un metodo especifico porque una tabla puede tener muchos tbodys
const tbody =  document.createElement("tbody");
miTabla.appendChild(tbody);
// Insertando mas elementos
mountains.forEach((item) => {
    let tr = tbody.insertRow();
    for(key in item){
        let celda = tr.insertCell();
        let texto = document.createTextNode(item[key]);
        celda.appendChild(texto);
    }
});

// Accediendo a los td's
const tr_s = miTabla.querySelectorAll("tr");
const td_s = tr_s[0].querySelectorAll("td");
// console.log(td_s);
// Coloreando primera fila
for(let i=0; i<td_s.length; i++){
    td_s[i].style.padding = "10px";
    td_s[i].style.border = "1px solid black";
    td_s[i].style.backgroundColor = "#B6CDF1";
    td_s[i].style.textAlign = "center";
}
// Coloreando las demas filas
// ForEach itera sobre todos los valores
// aplicamos una condicion para colorear las demas filas
tr_s.forEach((item, index) => {
    // console.log(miTabla.item(index));
    if(index>0){
        const td_s = item.querySelectorAll("td");
        for(let i=0; i<td_s.length; i++){
            td_s[i].style.padding = "10px";
            td_s[i].style.border = "1px solid black";
            td_s[i].style.backgroundColor = "#D5C56A";
            td_s[i].style.textAlign = "center";
        }
    } 
});
