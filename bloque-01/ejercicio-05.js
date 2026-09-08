/*
EJERCICIO 5 — Segundo número mayor (depuración)
Dificultad: Intermedio

La función debería devolver el segundo valor DISTINTO más grande de una lista.
Si no existen al menos dos valores distintos, debe devolver null.

El código inicial contiene errores. Corrígelo sin cambiar el nombre de la
función ni su parámetro.

Ejemplos:
segundoMayor([4, 9, 2, 9, 7]) -> 7
segundoMayor([5, 5, 3])       -> 3
segundoMayor([-1, -4, -2])    -> -2
segundoMayor([8, 8])          -> null
segundoMayor([])              -> null
*/

function segundoMayor(numeros) {
  let mayor = 0;
  let segundo = 0;
  if (numeros.length === 0) {
    return null;
  }

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      segundo = mayor;
      mayor = numeros[i];
    } else if (numeros[i] > segundo && numeros[i] < mayor) {
      segundo = numeros[i];
    }

    if (numeros[i] < 0) {
      if (numeros[i] < mayor) {
        mayor = numeros[i];
      } else {
        segundo = numeros[i];
      }
    }
  }

  return segundo;
}
segundoMayor([4, 9, 2, 9, 7]);
segundoMayor([5, 5, 3]);
segundoMayor([-1, -4, -2]);

/*
RETROALIMENTACIÓN

Los valores repetidos no deben ocupar el segundo puesto. Si un valor es igual
al mayor actual, simplemente se ignora. Además, iniciar `mayor` y `segundo`
en 0 hace que fallen las listas con números negativos.

VERSIÓN ALTERNATIVA — revisada
Se usa otro nombre para no reemplazar tu solución durante el entrenamiento.
*/
function segundoMayorAlternativa(numeros) {
  let mayor = null;
  let segundo = null;

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (mayor === null || numero > mayor) {
      segundo = mayor;
      mayor = numero;
    } else if (numero !== mayor && (segundo === null || numero > segundo)) {
      segundo = numero;
    }
  }

  return segundo;
}
