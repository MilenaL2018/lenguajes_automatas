function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function draw(start, end, current_status, edges){
   var graph = d3.select("#machine")
        .graphviz()
        .fit(true);
   graph.renderDot(`
            digraph {
                ordering=out;
                rankdir=LR;
                graph [fontname = "helvetica"];
                node [margin=0 width=0.5 shape=circle color="#00BCD4" fillcolor="#00BCD4" style=filled fontname = "helvetica"];
                edge [fontname="helvetica" color="#005291"];
                blank [style = invis, height=0, width=0, size=0, shape=point]
                blank -> ${start} [label="start"]
                ${end.map( (e) => { return `${e} [shape=doublecircle]`; } ).join('\n')}
                ${current_status} [fillcolor="#8BC34A" color="#8BC34A"]
                ${edges.flat().join('\n')}
            }
            `)
}