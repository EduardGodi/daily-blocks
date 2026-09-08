/*
EJERCICIO 3 — Resumen de temperaturas
Dificultad: Intermedio inicial

Implementa resumirTemperaturas(temperaturas).

Recibe una lista de números y devuelve una lista con exactamente tres valores:
[cantidadBajoCero, cantidadMayoresA30, promedio]

- El promedio se redondea a dos decimales.
- Si la lista está vacía, devuelve [0, 0, 0].
- Una temperatura igual a 0 no está bajo cero.
- Una temperatura igual a 30 no cuenta como mayor a 30.

Ejemplos:
resumirTemperaturas([-2, 0, 18, 31, 35]) -> [1, 2, 16.4]
resumirTemperaturas([30, 0, -5])          -> [1, 0, 8.33]
resumirTemperaturas([])                   -> [0, 0, 0]
*/

// function resumirTemperaturas(temperaturas) {
//   // Escribe tu solución aquí.
//   if (temperaturas.length === 0) {
//     return [0, 0, 0];
//   }
//   let sumatoria = 0;
//   let promedio = 0;
//   let cantidadBajoCero = 0;
//   let cantidadMayoresA30 = 0;
//   for (let i = 0; i < temperaturas.length; i++) {
//     sumatoria += temperaturas[i];
//     if (temperaturas[i] < 0) {
//       cantidadBajoCero++;
//     } else if (temperaturas[i] > 30) {
//       cantidadMayoresA30++;
//     }
//   }
//   promedio = (sumatoria / temperaturas.length).toFixed(2);
//   console.log([cantidadBajoCero, cantidadMayoresA30, promedio]);

//   return [cantidadBajoCero, cantidadMayoresA30, promedio];
// }

// Segunda Versión Mia

function resumirTemperaturas(temperaturas) {
  // Escribe tu solución aquí.
  if (temperaturas.length === 0) {
    return [0, 0, 0];
  }

  let sumatoria = 0;
  let cantidadBajoCero = 0;
  let cantidadMayoresA30 = 0;

  temperaturas.foreach((temperatura) => {
    sumatoria += temperatura;
    if (temperatura < 0) {
      cantidadBajoCero++;
    } else if (temperatura > 30) {
      cantidadMayoresA30++;
    }
  });

  const promedio = Number((sumatoria / temperaturas.length).toFixed(2));
  return [cantidadBajoCero, cantidadMayoresA30, promedio];
}

/*
RETROALIMENTACIÓN

- El recorrido, la sumatoria y las comparaciones `< 0` y `> 30` están bien.
- Con una lista vacía, `0 / 0` produce `NaN`; el enunciado pide `[0, 0, 0]`.
- El promedio debe redondearse explícitamente a dos decimales.

VERSIÓN ALTERNATIVA — revisada
Se usa otro nombre para no reemplazar tu solución durante el entrenamiento.
*/
function resumirTemperaturasAlternativa(temperaturas) {
  if (temperaturas.length === 0) {
    return [0, 0, 0];
  }

  let sumatoria = 0;
  let cantidadBajoCero = 0;
  let cantidadMayoresA30 = 0;

  for (let i = 0; i < temperaturas.length; i++) {
    const temperatura = temperaturas[i];
    sumatoria += temperatura;

    if (temperatura < 0) {
      cantidadBajoCero++;
    }
    if (temperatura > 30) {
      cantidadMayoresA30++;
    }
  }

  const promedio = Math.round((sumatoria / temperaturas.length) * 100) / 100;
  return [cantidadBajoCero, cantidadMayoresA30, promedio];
}
