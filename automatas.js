
document.getElementById("cargaCatalogo").addEventListener("click", cargarCatalogo);
function cargarCatalogo() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
        }
    };
    xhr.open("GET", "catalogo.xml", true);
    xhr.send();
}
function cargarXML(xml) {
    var docXML = xml.responseXML;
    var tabla = "<tr><th>Artista</th><th>Titulo</th></tr>";
    var discos = docXML.getElementsByTagName("CD");
    for (var i = 0; i < discos.length; i++) {
        tabla += "<tr><td>";
        tabla += discos[i].getElementsByTagName("ARTIST")[0].textContent;
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("TITLE")[0].textContent;
        tabla += "</td></tr>";
    }
    document.getElementById("demo").innerHTML = tabla;
}