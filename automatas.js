
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
                mijson = JSON.parse(reader.result);

            };

        } else {
            fileDisplayArea.innerText = "File not supported!";
        }
    });

    testButton.addEventListener('click', async function (e){

        let chain = chainInput.value;

        alert(mijson.automata);

        if (mijson.automata === "AD"){

            alert("ad");

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

                        var edges = mijson['transiciones'].map( (e) => `${e["actual"]} ->  ${e["proximo"]} [label="${e.valor}"]`);
                        await sleep(1500);
                        draw(mijson.estadoInicial, mijson.estadosSalida, actualState, edges);
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

            alert("pila");

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
                        console.log("hola");
                        var edges = mijson['transiciones'].map( (e) => `${e["actual"]} ->  ${e["proximo"]} [label="${e.valor}, ${e.tope}; ${e.apilo}"]`);
                        await sleep(1500);
                        draw(mijson.estadoInicial, mijson.estadosSalida, actualState, edges);

                        if (mijson.transiciones[q].apilo == "l"){
                            pila.pop();

                            if (pila.length == 1){
                                if (i === chain.length - 1){
                                    alert(chain.length - 1 + " " + i);
                                    for (w = 0; w < mijson.transiciones.length; w++){
                                        if (mijson.transiciones[w].valor == "l"){
                                            actualState = mijson.transiciones[w].proximo;
                                            console.log("hola");
                                            var edges = mijson['transiciones'].map( (e) => `${e["actual"]} ->  ${e["proximo"]} [label="${e.valor}, ${e.tope}; ${e.apilo}"]`);
                                            await sleep(1500);
                                            draw(mijson.estadoInicial, mijson.estadosSalida, actualState, edges);
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

            //alert(actualState);
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

            alert("turing");

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
                            if(index == cinta.length - 1){
                                if(mijson.transiciones[q].escribo == "b"){
                                    cinta.pop();
                                }
                            }
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

                if( actualState == mijson.estadoSalida){
                    alert("Cadena Correcta");
                } else {
                    alert("Cadena Incorrecta");
                }
            }
        }
    });
};

