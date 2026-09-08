/*
EJERCICIO 4 — Mejor racha de ventas
Dificultad: Intermedio

Implementa mejorRachaVentas(ventas, metaDiaria).

Recibe una lista con las ventas de días consecutivos. Devuelve la longitud de
la racha consecutiva más larga de días que alcanzaron o superaron metaDiaria.

- Los días por debajo de la meta rompen la racha.
- Si la lista está vacía o ningún día alcanza la meta, devuelve 0.

Ejemplos:
mejorRachaVentas([100, 120, 80, 130, 140, 150], 100) -> 3
mejorRachaVentas([50, 60, 70], 100)                   -> 0
mejorRachaVentas([100, 100, 99, 100], 100)            -> 2
mejorRachaVentas([], 100)                             -> 0
*/

function mejorRachaVentas(ventas, metaDiaria) {
  // Escribe tu solución aquí.
  if (ventas.length === 0) {
    return 0;
  }

  let diasRacha = 0;
  let mejorRacha = 0;

  for (let i = 0; i < ventas.length; i++) {
    const venta = ventas[i];
    if (venta >= metaDiaria) {
      diasRacha++;
    } else {
      if (diasRacha >= mejorRacha) {
        mejorRacha = diasRacha;
      }
      diasRacha = 0;
    }
  }
  if (diasRacha > mejorRacha) {
    return diasRacha;
  } else {
    return mejorRacha;
  }
}
mejorRachaVentas([100, 120, 80, 130, 140, 150], 100);
mejorRachaVentas([50, 60, 70], 100);
mejorRachaVentas([100, 100, 99, 100], 100);
mejorRachaVentas([], 100);

/*
RETROALIMENTACIÓN

Solución correcta. Mantienes separadas la racha actual y la mejor racha,
actualizando el máximo antes de reiniciar. También cubres correctamente la
racha que termina en el último elemento de la lista.

VERSIÓN ALTERNATIVA — revisada
Se usa otro nombre para no reemplazar tu solución durante el entrenamiento.
*/
function mejorRachaVentasAlternativa(ventas, metaDiaria) {
  let rachaActual = 0;
  let mejorRacha = 0;

  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i] >= metaDiaria) {
      rachaActual++;
      mejorRacha = Math.max(mejorRacha, rachaActual);
    } else {
      rachaActual = 0;
    }
  }

  return mejorRacha;
}
