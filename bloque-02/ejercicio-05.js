/*
EJERCICIO 5 — Promedio móvil de tres días (depuración)
Dificultad: Intermedio+

La función debe devolver una nueva lista. Para cada posición i, debe guardar
el promedio de los valores disponibles entre i-1, i e i+1, redondeado a dos
decimales. En los extremos solo se usan los vecinos que existen.

El código inicial tiene errores. Corrígelo sin cambiar el nombre de la función
ni su parámetro y sin modificar la lista original.

Ejemplos:
promedioMovilTres([3, 6, 9, 12]) -> [4.5, 6, 9, 10.5]
promedioMovilTres([10])          -> [10]
promedioMovilTres([])            -> []
*/

function promedioMovilTres(valores) {
  const resultado = [];

  for (let i = 0; i <= valores.length; i++) {
    let suma = valores[i];
    let cantidad = 1;

    if (i - 1 > 0) {
      suma += valores[i - 1];
      cantidad++;
    }

    if (i + 1 < valores.length) {
      suma += valores[i + 1];
      cantidad++;
    }

    resultado.push((suma / cantidad).toFixed(2));
  }

  return resultado;
}

