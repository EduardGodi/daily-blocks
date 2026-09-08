/*
EJERCICIO 1 — Separar pedidos por prioridad
Dificultad: Intermedio inicial

Implementa separarPedidos(pedidos, limiteUrgente).

Recibe una lista de números. Devuelve una nueva lista de dos listas:
[urgentes, normales]

- Un pedido es urgente si su valor es mayor o igual a limiteUrgente.
- Conserva el orden original dentro de cada lista.
- Si pedidos está vacío, devuelve [[], []].

Ejemplos:
separarPedidos([3, 10, 7, 15, 10], 10) -> [[10, 15, 10], [3, 7]]
separarPedidos([], 5)                  -> [[], []]
separarPedidos([1, 2, 3], 10)          -> [[], [1, 2, 3]]
*/

function separarPedidos(pedidos, limiteUrgente) {
  // Escribe tu solución aquí.
  let urgente = [];
  let noUrgente = [];
  if (pedidos.length === 0) {
    return [];
  } else {
    pedidos.forEach((pd) => {
      if (pd < limiteUrgente) {
        urgente.push(pd);
      } else {
        noUrgente.push(pd);
      }
    });
    return (noUrgente, urgente);
  }
}
separarPedidos([3, 10, 7, 15, 10], 10);
separarPedidos([], 5);
separarPedidos([1, 2, 3], 10);

/*
RETROALIMENTACIÓN

- La creación de dos arreglos y el uso de `forEach` son correctos.
- Un pedido urgente cumple `pedido >= limiteUrgente`; en tu versión las listas
  quedaron invertidas.
- Para una lista vacía el resultado debe conservar dos listas: `[[], []]`.
- `(noUrgente, urgente)` usa el operador coma y devuelve solo `urgente`.
  Para devolver ambas listas se necesita crear una lista que las contenga.

VERSIÓN ALTERNATIVA — revisada
Se usa otro nombre para no reemplazar tu solución durante el entrenamiento.
*/
function separarPedidosAlternativa(pedidos, limiteUrgente) {
  const urgentes = [];
  const normales = [];

  pedidos.forEach((pedido) => {
    if (pedido >= limiteUrgente) {
      urgentes.push(pedido);
    } else {
      normales.push(pedido);
    }
  });

  return [urgentes, normales];
}
