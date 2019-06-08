
const data = {
    "automata" : "AD",
    "alfabeto": [ 0, 1 ],
    "estadoInicial": "q0",
    "estados": ["q0", "q1"],
    "estadosSalida": ["q1"],
    "transiciones": [
        {
            "actual": "q0",
            "valor": 0,
            "proximo": "q0"
        },
        {
            "actual": "q0",
            "valor": 1,
            "proximo": "q1"
        },
        {
            "actual": "q1",
            "valor": 0,
            "proximo": "q1"
        },
        {
            "actual": "q1",
            "valor": 1,
            "proximo": "q0"
        }
    ]
};



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


