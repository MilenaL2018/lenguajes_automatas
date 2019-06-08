
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



var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

function diagram(data){


}

