
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



function drawState() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 15, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}


 function drawJump() {
     var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
     ctx.beginPath();
     // Staring point (10,45)
     ctx.moveTo(10,45);
     // End point (180,47)
     ctx.lineTo(180,47);
     // Make the line visible
     ctx.strokeStyle = "#000000";
     ctx.stroke();
}



function drawAFD() {
    var canvas;
    canvas = document.getElementById("myCanvas");
    var ctx;
    ctx = canvas.getContext("2d");
    //ctx.arc(50, 50, 10, 0, 2 * Math.PI);
    //ctx.stroke();
    ctx.fillRect(50, 50, 80, 80);
    console.log(canvas);

}

function drawAP(){
    var canvas;
    canvas = document.getElementById("myCanvas");
    var ctx;
    ctx = canvas.getContext("2d");

    console.log(canvas);
}

function drawMT(){
    var canvas;
    canvas = document.getElementById("myCanvas");
    var ctx;
    ctx = canvas.getContext("2d");
    ctx.fillRect(10, 10, 10, 10);
    console.log(canvas);
    ctx.clear(true)
}


