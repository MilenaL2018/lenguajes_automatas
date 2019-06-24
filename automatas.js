window.onload = function() {
    var fileInput = document.getElementById('inputFiles');
    var fileDisplayArea = document.getElementById('showData');
    var testButton = document.getElementById('testButton');
    var chainInput = document.getElementById('inlineFormInput');
    let mijson;

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var textType = /text.*/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.readAsText(file);

            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
                alert(reader.result);
                mijson = JSON.parse(reader.result);

            };

        } else {
            fileDisplayArea.innerText = "File not supported!";
        }
    });

    testButton.addEventListener('click', function (e){

        let chain = chainInput.value;

        if (mijson.automata === "AD"){

            //Verifico que todos los caracteres de la cadena esten en el alfabeto
            for (i = 0; i < chain.length; i++){
                for (q = 0; q < mijson.alfabeto.length; q++){
                    if (chain[i] == mijson.alfabeto[q]){
                        break;
                    }
                    if (chain[i] !== mijson.alfabeto[q] && mijson.alfabeto[q] === mijson.alfabeto[mijson.alfabeto.length - 1] ){
                        alert("Caracter incorrecto: " + chain[i]);
                        return;
                    }
                }
            }

            //Verifico que el estado inicial sea usado
            for (i = 0; i < mijson.transiciones.length; i++){
                if (mijson.transiciones[i].actual == mijson.estadoInicial ){
                    break;
                }
                if (mijson.transiciones[i].actual !== mijson.estadoInicial && mijson.transiciones[i] === mijson.transiciones[mijson.transiciones.length - 1]){
                    alert("Estado inicial sin transicion definida");
                    return;
                }
            }

            let transicionOk = false;

            for (i = 0; i < mijson.transiciones.length; i++){
                //Verifico todos los estados
                for (q = 0; q < mijson.estados.length; q++){
                    if (mijson.transiciones[i].actual == mijson.estados[q]){
                        for (p = 0; p < mijson.estados.length; p++){
                            if (mijson.transiciones[i].proximo == mijson.estados[p]){
                                transicionOk = true;
                                break;
                            }
                        }
                    }

                    if (transicionOk === true){
                        transicionOk = false;
                        break;
                    }

                    if (mijson.transiciones[i].actual !== mijson.estados[q] && mijson.transiciones[i].proximo !== mijson.estados[q] && mijson.estados[q] === mijson.estados[mijson.estados.length - 1]){
                        alert("Error de estados en transiciones");
                        return;
                    }
                }
            }

            for (i = 0; i < mijson.transiciones.length; i++){
                //Verifico el alfabeto
                for (w = 0; w < mijson.alfabeto.length; w++){
                    if(mijson.transiciones[i].valor == mijson.alfabeto[w]){
                        break;
                    }
                    if (mijson.transiciones[i].valor !== mijson.alfabeto[w] && mijson.alfabeto[w] === mijson.alfabeto[mijson.alfabeto.length - 1]){
                        alert("Error de alfabeto en transiciones");
                        return;
                    }
                }
            }

            //Verifico los estados de salida
            for (t = 0; t < mijson.estadosSalida.length; t++){
                for (i = 0; i < mijson.transiciones.length; i++){
                    if (mijson.transiciones[i].proximo == mijson.estadosSalida[t]){
                        break;
                    }

                    if ( mijson.transiciones[i].proximo !== mijson.estadosSalida[t] && mijson.estadosSalida[t] === mijson.estadosSalida[mijson.estadosSalida.length - 1] && mijson.transiciones[i] === mijson.transiciones[mijson.transiciones.length - 1]){
                        alert("Error en los estados de salida");
                        return;
                    }
                }
            }


            let actualState = mijson.estadoInicial;
            //Recorro el automata
            for (i = 0; i < chain.length; i++){
                for (q = 0; q < mijson.transiciones.length; q++){
                    if (mijson.transiciones[q].actual == actualState && mijson.transiciones[q].valor == chain[i]){
                        actualState = mijson.transiciones[q].proximo;
                        break;
                    }
                }
            }

            //Determino si da salida o no
            for (i = 0; i < mijson.estadosSalida.length; i++){
                if( actualState == mijson.estadosSalida[i]){
                    alert("Cadena Correcta");
                    return;
                }
                if(actualState !== mijson.estadosSalida[i] && mijson.estadosSalida[i] === mijson.estadosSalida[mijson.estadosSalida.length - 1]){
                    alert("Cadena Incorrecta");
                    return;
                }
            }
        } else if (mijson.automata === "AP"){
            //Verifico que todos los caracteres de la cadena esten en el alfabeto
            for (i = 0; i < chain.length; i++){
                for (q = 0; q < mijson.alfabeto.length; q++){
                    if (chain[i] == mijson.alfabeto[q]){
                        break;
                    }
                    if (chain[i] !== mijson.alfabeto[q] && mijson.alfabeto[q] === mijson.alfabeto[mijson.alfabeto.length - 1] ){
                        alert("Caracter incorrecto: " + chain[i]);
                        return;
                    }
                }
            }

            //Verifico que el estado inicial sea usado
            for (i = 0; i < mijson.transiciones.length; i++){
                if (mijson.transiciones[i].actual == mijson.estadoInicial ){
                    break;
                }
                if (mijson.transiciones[i].actual !== mijson.estadoInicial && mijson.transiciones[i] === mijson.transiciones[mijson.transiciones.length - 1]){
                    alert("Estado inicial sin transicion definida");
                    return;
                }
            }

            let transicionOk = false;

            for (i = 0; i < mijson.transiciones.length; i++){
                //Verifico todos los estados
                for (q = 0; q < mijson.estados.length; q++){
                    if (mijson.transiciones[i].actual == mijson.estados[q]){
                        for (p = 0; p < mijson.estados.length; p++){
                            if (mijson.transiciones[i].proximo == mijson.estados[p]){
                                transicionOk = true;
                                break;
                            }
                        }
                    }

                    if (transicionOk === true){
                        transicionOk = false;
                        break;
                    }

                    if (mijson.transiciones[i].actual !== mijson.estados[q] && mijson.transiciones[i].proximo !== mijson.estados[q] && mijson.estados[q] === mijson.estados[mijson.estados.length - 1]){
                        alert("Error de estados en transiciones");
                        return;
                    }
                }
            }

            for (i = 0; i < mijson.transiciones.length; i++){
                //Verifico el alfabeto
                for (w = 0; w < mijson.alfabeto.length; w++){
                    if(mijson.transiciones[i].valor == mijson.alfabeto[w]){
                        break;
                    }
                    if (mijson.transiciones[i].valor !== mijson.alfabeto[w] && mijson.alfabeto[w] === mijson.alfabeto[mijson.alfabeto.length - 1]){
                        alert("Error de alfabeto en transiciones");
                        return;
                    }
                }
            }

            //Verifico los estados de salida
            for (t = 0; t < mijson.estadosSalida.length; t++){
                for (i = 0; i < mijson.transiciones.length; i++){
                    if (mijson.transiciones[i].proximo == mijson.estadosSalida[t]){
                        break;
                    }

                    if ( mijson.transiciones[i].proximo !== mijson.estadosSalida[t] && mijson.estadosSalida[t] === mijson.estadosSalida[mijson.estadosSalida.length - 1] && mijson.transiciones[i] === mijson.transiciones[mijson.transiciones.length - 1]){
                        alert("Error en los estados de salida");
                        return;
                    }
                }
            }

            //Recorro el automata

            let actualState = mijson.estadoInicial;
            let pila = ["#"];

            for (i = 0; i < chain.length; i++){
                for (q = 0; q < mijson.transiciones.length; q++){

                    if (mijson.transiciones[q].actual == actualState && mijson.transiciones[q].valor == chain[i] && mijson.transiciones[q].tope == pila[pila.length - 1]){
                        actualState = mijson.transiciones[q].proximo;

                        if (mijson.transiciones[q].apilo == "l"){
                            pila.pop();

                            if (pila.length == 1){
                                if (i === chain.length - 1){
                                    alert(chain.length - 1 + " " + i);
                                    for (w = 0; w < mijson.transiciones.length; w++){
                                        if (mijson.transiciones[w].valor == "l"){
                                            actualState = mijson.transiciones[w].proximo;
                                            break;
                                        }
                                    }
                                }
                            }
                        } else {
                            pila.push(mijson.transiciones[q].apilo);
                        }

                        break;
                    }
                }
            }

            alert(actualState);
            //Verifico si da salida
            for (i = 0; i < mijson.estadosSalida.length; i++){
                if( actualState == mijson.estadosSalida[i]){
                    alert("Cadena Correcta");
                    return;
                }
                if(actualState !== mijson.estadosSalida[i] && mijson.estadosSalida[i] === mijson.estadosSalida[mijson.estadosSalida.length - 1]){
                    alert("Cadena Incorrecta");
                    return;
                }
            }
        } else if (mijson.automata === "MT"){
            //Verifico que todos los caracteres de la cinta esten en el alfabeto
            for (i = 0; i < mijson.cinta.length; i++){
                for (q = 0; q < mijson.alfabetoDeCinta.length; q++){
                    if (mijson.cinta[i] == mijson.alfabetoDeCinta[q]){
                        break;
                    }
                    if (mijson.cinta[i] !== mijson.alfabetoDeCinta[q] && mijson.alfabetoDeCinta[q] === mijson.alfabetoDeCinta[mijson.alfabetoDeCinta.length - 1] ){
                        alert("Caracter incorrecto: " + mijson.cinta[i]);
                        return;
                    }
                }
            }

            //Verifico que el estado inicial sea usado
            for (i = 0; i < mijson.transiciones.length; i++){
                if (mijson.transiciones[i].actual == mijson.estadoInicial ){
                    break;
                }
                if (mijson.transiciones[i].actual !== mijson.estadoInicial && mijson.transiciones[i] === mijson.transiciones[mijson.transiciones.length - 1]){
                    alert("Estado inicial sin transicion definida");
                    return;
                }
            }

            let transicionOk = false;

            for (i = 0; i < mijson.transiciones.length; i++){
                //Verifico todos los estados
                for (q = 0; q < mijson.estados.length; q++){
                    if (mijson.transiciones[i].actual == mijson.estados[q]){
                        for (p = 0; p < mijson.estados.length; p++){
                            if (mijson.transiciones[i].proximo == mijson.estados[p]){
                                transicionOk = true;
                                break;
                            }
                        }
                    }

                    if (transicionOk === true){
                        transicionOk = false;
                        break;
                    }

                    if (mijson.transiciones[i].actual !== mijson.estados[q] && mijson.transiciones[i].proximo !== mijson.estados[q] && mijson.estados[q] === mijson.estados[mijson.estados.length - 1]){
                        alert("Error de estados en transiciones");
                        return;
                    }
                }
            }

            for (i = 0; i < mijson.transiciones.length; i++){
                //Verifico el alfabeto
                for (w = 0; w < mijson.alfaalfabetoDeCintabeto.length; w++){
                    if(mijson.transiciones[i].valor == mijson.alfabetoDeCinta[w]){
                        break;
                    }
                    if (mijson.transiciones[i].valor !== mijson.alfabetoDeCinta[w] && mijson.alfabetoDeCinta[w] === mijson.alfabetoDeCinta[mijson.alfabetoDeCinta.length - 1] && mijson.transiciones[i] === mijson.transiciones[mijson.transiciones.length - 1]){
                        alert("Error de alfabeto en transiciones");
                        return;
                    }
                }
            }

            //Verifico los estados de salida
            for (i = 0; i < mijson.transiciones.length; i++){
                if (mijson.transiciones[i].proximo == mijson.estadoSalida){
                    break;
                }

                if ( mijson.transiciones[i].proximo !== mijson.estadoSalida && mijson.transiciones[i] === mijson.transiciones[mijson.transiciones.length - 1]){
                    alert("Error en los estados de salida");
                    return;
                }
            }


            //Recorro el automata

            let actualState = mijson.estadoInicial;
            let cinta = mijson.cinta;
            let index = 0;
            let error = false;

            for (q = 0; q < mijson.transiciones.length; q++){

                if (mijson.transiciones[q].actual == actualState && mijson.transiciones[q].valor == cinta[index]){

                    actualState = mijson.transiciones[q].proximo;
                    cinta[index] = mijson.transiciones[q].escribo;

                    if(mijson.transiciones[q].direccion == "I"){
                        if(index > 0){
                            index--;
                        } else {
                            index = 0;
                        }
                    } else if (mijson.transiciones[q].direccion == "D"){
                        if(index < cinta.length - 1){
                            index++;
                        } else {
                            index++;
                            cinta.push("b");
                        }
                    } else {
                        alert("Error en definicion de direccion");
                        error = true;
                    }
                    break;
                }
                if (error){
                    break;
                }
            }

            if(!error){
                //Verifico si da salida si no hubo un error antes
                for (i = 0; i < mijson.estadosSalida.length; i++){
                    if( actualState == mijson.estadosSalida[i]){
                        alert("Cadena Correcta");
                        return;
                    }
                    if(actualState !== mijson.estadosSalida[i] && mijson.estadosSalida[i] === mijson.estadosSalida[mijson.estadosSalida.length - 1]){
                        alert("Cadena Incorrecta");
                        return;
                    }
                }
            }
        }
    });
};



/*

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
*/
