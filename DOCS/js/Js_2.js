function guardarValores() {
    var edades = [];

    for (var i = 1; i <= 10; i++) {
        var campo = document.getElementById("valor" + i);
        var valor = parseInt(campo.value);
        edades.push(valor);
    }

    var mayoresDeEdad = 0;
    var menoresDeEdad = 0;
    var adultosMayores = 0;
    var edadMasBaja = edades[0];
    var edadMasAlta = edades[0];
    var sumaEdades = 0;

    for (var i = 0; i < edades.length; i++) {
        var edad = edades[i];

        if (edad >= 1 && edad <= 120) {
            sumaEdades += edad;

            if (edad < 18) {
                menoresDeEdad++;
            } else if (edad >= 18 && edad < 60) {
                mayoresDeEdad++;
            } else {
                adultosMayores++;
            }

            if (edad < edadMasBaja) {
                edadMasBaja = edad;
            }
            if (edad > edadMasAlta) {
                edadMasAlta = edad;
            }
        } else {
            alert("La edad ingresada no está en el rango válido (entre 1 y 120 años).");
            return;
        }
    }

    var promedioEdades = sumaEdades / edades.length;

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Personas mayores de edad: " + mayoresDeEdad + "<br>" +
                           "Personas menores de edad: " + menoresDeEdad + "<br>" +
                           "Adultos mayores (60+ años): " + adultosMayores + "<br>" +
                           "Edad más baja: " + edadMasBaja + "<br>" +
                           "Edad más alta: " + edadMasAlta + "<br>" +
                           "Promedio de edades: " + promedioEdades.toFixed(2);
}