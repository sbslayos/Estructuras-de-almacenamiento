document.getElementById("insertar").addEventListener("click", function () {

    vector1=[
        parseInt(document.getElementById("numero1").value),
        parseInt(document.getElementById("numero2").value),
        parseInt(document.getElementById("numero3").value),
        parseInt(document.getElementById("numero4").value),
        parseInt(document.getElementById("numero5").value)
    ]

    vector2=[
        parseInt(document.getElementById("numero6").value),
        parseInt(document.getElementById("numero7").value),
        parseInt(document.getElementById("numero8").value),
        parseInt(document.getElementById("numero9").value),
        parseInt(document.getElementById("numero10").value)

    ]
    

    function esOrdenAscendente(vector) {
        for (var i = 1; i < vector.length; i++) {
            if (vector[i] < vector[i - 1]) {
                return false;
            }
        }
        return true;
    }

    if (!esOrdenAscendente(vector1) || !esOrdenAscendente(vector2)) {
        alert("Asegúrese de que los vectores estén en orden ascendente.");
        return;
    }

    function mezclarYOrdenar(vector1, vector2) {
        var resultado = vector1.concat(vector2);
        resultado.sort(function (a, b) {
            return a - b;
        });
        return resultado;
        
    } 


    // Mezclar los vectores y ordenarlos
    var resultado = mezclarYOrdenar(vector1, vector2);

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = resultado.join(" ");




});

// Función para verificar si un vector está en orden ascendente


// Función para mezclar y ordenar dos vectores


// function mezclarVectores() {
//     var vector1 = [];
//     var vector2 = [];
//     var vectorMezclado = [];

//     // Llenar el primer vector
//     for (var i = 0; i < 5; i++) {
//         var numero = parseInt(prompt("Ingrese un número para el primer vector (orden ascendente):"));

//         if (i > 0 && numero <= vector1[i - 1]) {
//             alert("El número debe ser mayor que el anterior. Intente nuevamente.");
//             i--;
//         } else {
//             vector1.push(numero);
//         }
//     }

//     // Llenar el segundo vector
//     for (var i = 0; i < 5; i++) {
//         var numero = parseInt(prompt("Ingrese un número para el segundo vector (orden ascendente):"));

//         if (i > 0 && numero <= vector2[i - 1]) {
//             alert("El número debe ser mayor que el anterior. Intente nuevamente.");
//             i--;
//         } else {
//             vector2.push(numero);
//         }
//     }

//     // Mezclar los vectores
//     var i = 0;
//     var j = 0;

//     while (i < vector1.length && j < vector2.length) {
//         if (vector1[i] < vector2[j]) {
//             vectorMezclado.push(vector1[i]);
//             i++;
//         } else {
//             vectorMezclado.push(vector2[j]);
//             j++;
//         }
//     }

//     // Agregar los elementos restantes (si los hay) de ambos vectores
//     while (i < vector1.length) {
//         vectorMezclado.push(vector1[i]);
//         i++;
//     }

//     while (j < vector2.length) {
//         vectorMezclado.push(vector2[j]);
//         j++;
//     }

//     // Mostrar el vector mezclado
//     alert("Vector mezclado: " + vectorMezclado.join(" "));
// }
