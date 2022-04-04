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
const thead = document.createElement("thead");
const tr = document.createElement("tr");
headers.forEach((item) => {
    const th = document.createElement("th");
    let crearTexto = document.createTextNode(item);
    th.appendChild(crearTexto);
    tr.appendChild(th);
});
thead.appendChild(tr);
// Insertando tr in table
miTabla.appendChild(thead);
// Accediendo a los th
const th_s = miTabla.querySelectorAll("th");
for(let i=0; i<th_s.length; i++){
    th_s[i].style.padding = "10px";
    th_s[i].style.border = "1px solid black";
    th_s[i].style.backgroundColor = "#B6CDF1";
    th_s[i].style.textAlign = "center";
}
// Insertando mas elementos
const tbody = document.createElement("tbody");
mountains.forEach((item) => {
    // let tr = miTabla.insertRow();
    let tr = document.createElement("tr");
    for(key in item){
        let td = document.createElement("td");
        let texto = document.createTextNode(item[key]);
        td.appendChild(texto);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
});
miTabla.appendChild(tbody);
// Accediendo a los tr
const td_s = miTabla.querySelectorAll("td");
for(let i=0; i<td_s.length; i++){
    td_s[i].style.padding = "10px";
    td_s[i].style.border = "1px solid black";
    td_s[i].style.backgroundColor = "#D5C56A";
    td_s[i].style.textAlign = "center";
}