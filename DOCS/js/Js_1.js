function mostrarCampos(){
    var figura = document.getElementById("figura").value;
    var campos = document.getElementById("campos");

    campos.innerHTML ="";

    if (figura === "triangulo" || figura === "rectangulo") {
        campos.innerHTML = "Base: <input type='number' id='base'/> Altura: <input type='number' id='altura'/>";
    } else if (figura === "cuadrado") {
        campos.innerHTML = "Lado: <input type='number' id='lado'/>";
    } else if (figura === "circulo") {
        campos.innerHTML = "Radio: <input type='number' id='radio'>";
    }
}

function calcular(){
    var figura = document.getElementById("figura").value;
    var resultado = document.getElementById("resultado");

    if (figura === "triangulo"){
        var base = parseFloat(document.getElementById("base").value) 
        var altura = parseFloat(document.getElementById("altura").value)
        var area = base * altura / 2
        resultado.innerHTML = "Area del triangulo: " +area;
    } else if (figura === "rectangulo") {
        var base = parseFloat(document.getElementById("base").value)
        var altura = parseFloat(document.getElementById("altura").value)
        var perimetro = 2 * (base + altura)
        resultado.innerHTML = "Perimetro del rectangulo: " +perimetro;
        
    } else if (figura === "cuadrado") {
        var lado = parseFloat(document.getElementById("lado").value)
        var area = lado * lado;
        resultado.innerHTML = "Area del cuadrado: " +area;
    } else if (figura === "circulo"){
        var radio = parseFloat(document.getElementById("radio").value)
        var area = Math.PI*radio*radio;
        resultado.innerHTML = "El area del circulo: " +area.toFixed(3);
    }
    
}

mostrarCampos();

