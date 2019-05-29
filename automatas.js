
/*document.getElementById("cargaCatalogo").addEventListener("click", cargarCatalogo);
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
}*/

window.onload = function() {
    var fileInput = document.getElementById('inputFiles');
    var fileDisplayArea = document.getElementById('showData');

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.readAsText(file);

            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
                mijson = JSON.parse(reader.result);

                alert(mijson.alfabeto);
            };

        } else {
            fileDisplayArea.innerText = "File not supported!";
        }
    });
};
