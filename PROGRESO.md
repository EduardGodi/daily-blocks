# Bitácora de progreso

## Sesión actual — 28 de agosto de 2026

- Categoría: Junior.
- Lenguaje: JavaScript.
- Nivel inicial declarado: básico–intermedio.
- Estado: Sesión pausada. Bloque 1 cerrado; Bloque 2 en curso desde el ejercicio 2.
- Competencia: 29 de agosto de 2026.

## Resultados por bloque

| Bloque | Nivel | Correctos de forma independiente | Tiempo | Estado |
|---|---|---:|---:|---|
| 1 | Básico–intermedio | 1 / 5 | — | Cerrado con revisión guiada. Ejercicio 4 resuelto correctamente; 1, 2, 3 y 5 requirieron correcciones o apoyo. |
| 2 | Intermedio (arreglos) | 0 / 5 | — | Ejercicio 1 revisado con apoyo; retomar desde el ejercicio 2. |

## Aspectos que cuestan

- Diferenciar entre mostrar un valor con `console.log` y devolverlo con `return`.
- Traducir cada condición del enunciado a una comparación exacta (`< 6`, `>= 8`, `>= 10`).
- Controlar listas vacías antes de dividir entre su longitud.
- Usar `null` como marcador cuando aún no existe un valor; no inicializar máximos en 0 si pueden llegar números negativos.
- Ignorar duplicados del máximo cuando se solicita el segundo valor distinto.
- Recordar que los métodos distinguen mayúsculas: `forEach`, no `foreach`.
- Al devolver varias listas, envolverlas en una lista: `[primera, segunda]`; `(primera, segunda)` no equivale a eso.

## Fortalezas observadas

- Implementa correctamente recorridos de listas con acumuladores.
- Identifica y conserva el máximo de una racha consecutiva.
- Muestra buena disposición para comparar alternativas y aprender métodos de arreglos.

## Fortalezas observadas

Pendiente de identificar mediante las soluciones del Bloque 1.

## Próximos ajustes y consejos

- En el Bloque 2, priorizar `push`, `includes`, lectura por índice y la creación de un arreglo resultado.
- Antes de ejecutar: verificar nombre exacto de la función, `return` en todos los caminos y tipo de retorno solicitado.
- No usar `sort()` para evitar un recorrido si puedes resolverlo en una sola pasada; `sort()` modifica el arreglo original y puede ser una trampa.

## Cierre de sesión

- Se completó el primer bloque de cinco ejercicios básico–intermedios.
- Se inició el segundo bloque, enfocado en manipulación de arreglos.
- El ejercicio 4 del Bloque 1 fue resuelto de forma independiente y correcta.
- En los demás ejercicios se practicaron correcciones guiadas y se añadieron versiones alternativas para comparar.
- El siguiente punto es `bloque-02/ejercicio-02.js`: eliminar repetidos conservando el orden de la primera aparición.

### Repaso breve antes del torneo

1. Toda función del juez debe terminar devolviendo con `return`; `console.log` no es una respuesta.
2. Para recorrer una lista, prioriza `for` si quieres máxima claridad; usa `forEach` cuando solo necesites visitar cada elemento.
3. Inicia los arreglos de resultado vacíos y usa `push`. Si la entrada está vacía, muchas veces el resultado correcto sale naturalmente.
4. Lee de nuevo los operadores límite: `>=` incluye el valor, `>` no lo incluye.
5. Para datos que pueden ser negativos, no uses 0 como valor inicial de máximo o mínimo sin pensarlo.

### Nivel actual estimado

Entre básico–intermedio e intermedio inicial. Ya tienes una base sólida en recorridos, acumuladores y rachas. La práctica que más retorno dará a continuación es construir arreglos resultado, controlar casos borde y escribir condiciones exactas.

## Resumen del Bloque 1

Se practicaron condicionales, redondeo, validación de texto, recorridos de arreglos, acumuladores, rachas y depuración. El mayor obstáculo fue convertir todos los requisitos del enunciado en condiciones completas y exactas. El siguiente bloque concentra la práctica en construir y transformar arreglos, manteniendo los mismos hábitos de validación.
