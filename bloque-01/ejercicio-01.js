/*
EJERCICIO 1 — Tarifa del estacionamiento
Dificultad: Fácil+

Implementa calcularTarifaEstacionamiento(horas, esEstudiante).

Reglas:
- Si horas es menor o igual que 0, devuelve 0.
- La primera hora cuesta Q5.
- Cada hora adicional cuesta Q3. Una fracción de hora cuenta como una hora completa.
- Si esEstudiante es true, aplica 20% de descuento al total.
- El resultado debe ser un número redondeado a dos decimales.

Ejemplos:
calcularTarifaEstacionamiento(1, false)   -> 5
calcularTarifaEstacionamiento(2.2, false) -> 11
calcularTarifaEstacionamiento(3, true)    -> 8.8
calcularTarifaEstacionamiento(0, true)    -> 0
*/

function calcularTarifaEstacionamiento(horas, esEstudiante) {
  // Escribe tu solución aquí.
  let precio = 0;
  let precioTotal;
  let horasProcesadas;
  if (horas <= 0) {
    console.log(precio);
  } else if (esEstudiante) {
    horasProcesadas = Math.ceil(horas - 1);
    precio = 5 + horasProcesadas * 3;
    precioTotal = precio - precio * 0.2;
    console.log(precioTotal);
  } else {
    horasProcesadas = Math.ceil(horas - 1);
    precio = 5 + horasProcesadas * 3;
    console.log(precio);
  }
}
calcularTarifaEstacionamiento(1, false);
calcularTarifaEstacionamiento(2.2, false);
calcularTarifaEstacionamiento(3, true);
calcularTarifaEstacionamiento(0, true);

/*
VERSIÓN ALTERNATIVA — revisada

Para entregarla en el torneo, conserva exactamente el nombre de función que
pida el enunciado. Esta versión usa otro nombre solo para no reemplazar tu
código original durante el entrenamiento.
*/
function calcularTarifaEstacionamientoAlternativa(horas, esEstudiante) {
  if (horas <= 0) {
    return 0;
  }

  const horasCobradas = Math.ceil(horas);
  let total = 5 + (horasCobradas - 1) * 3;

  if (esEstudiante) {
    total *= 0.8;
  }

  return Math.round(total * 100) / 100;
}
