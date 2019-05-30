
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


onclick = function () {
    var canvas = document.getElementById('canvasId');
    var context = canvas.getContext('2d');

        // do some drawing
    //context.clear();

    // do some more drawing
   // context.setTransform(-1, 0, 0, 1, 200, 200);
        // do some drawing with the new transform
   // context.clear(true);
        // draw more, still using the preserved transform
    };

function drawState(){
    var canvas;
    canvas = document.getElementById("myCanvas");
    var ctx;
    ctx = canvas.getContext("2d");
    ctx.arc(50, 50, 10, 0, 2 * Math.PI);
    ctx.stroke();
    console.log(canvas);

}

window.onload = function drawJump() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arrow({x: 10, y: 10}, {x: 100, y: 170}, 10);
    arrow({x: 40, y: 250}, {x: 10, y: 70}, 5);


    function arrow (p1, p2, size) {
        var angle = Math.atan2((p2.y - p1.y) , (p2.x - p1.x));
        var hyp = Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));

        ctx.save();
        ctx.translate(p1.x, p1.y);
        ctx.rotate(angle);

        // line
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(hyp - size, 0);
        ctx.stroke();

        // triangle
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.lineTo(hyp - size, size);
        ctx.lineTo(hyp, 0);
        ctx.lineTo(hyp - size, -size);
        ctx.fill();

        ctx.restore();
    }
}


function drawAFD() {
    var canvas;
    canvas = document.getElementById("myCanvas");
    var ctx;
    ctx = canvas.getContext("2d");
    ctx.arc(50, 50, 10, 0, 2 * Math.PI);
    ctx.stroke();
    console.log(canvas);

}

function drawAP(){
    var canvas;
    canvas = document.getElementById("myCanvas");
    var ctx;
    ctx = canvas.getContext("2d");
    ctx.fillRect(50, 50, 80, 80);
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
