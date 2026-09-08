/*
EJERCICIO 2 — Clasificación de una contraseña
Dificultad: Fácil+

Implementa clasificarContrasena(contrasena).

Devuelve:
- "invalida" si tiene menos de 6 caracteres o contiene espacios.
- "fuerte" si tiene 10 o más caracteres, al menos una mayúscula,
  al menos una minúscula y al menos un dígito.
- "media" si no es inválida y tiene al menos 8 caracteres.
- "debil" en cualquier otro caso válido.

No es necesario reconocer símbolos especiales.

Ejemplos:
clasificarContrasena("Abc1234567") -> "fuerte"
clasificarContrasena("abcdefgh")   -> "media"
clasificarContrasena("abc123")     -> "debil"
clasificarContrasena("Ab 12345")   -> "invalida"
*/

function clasificarContrasena(contrasena) {
  // Escribe tu solución aquí.
  let cntUp = 0;
  let cntLw = 0;
  let cntN = 0;
  let verifi = contrasena.includes(" ");
  if (verifi) return "invalida";
  if (contrasena.length > 6) {
    for (let i = 0; i < contrasena.length; i++) {
      let caracter = contrasena[i];
      if (
        caracter === caracter.toUpperCase() &&
        caracter !== caracter.toLowerCase()
      ) {
        cntUp++;
      }
      if (
        caracter === caracter.toLowerCase() &&
        caracter !== caracter.toUpperCase()
      ) {
        cntLw++;
      }
      if (caracter >= 0) {
        cntN++;
      }
    }
    if (cntUp > 0 && cntLw > 0 && cntN > 0) {
      return "Fuerte";
    } else if (cntUp > 0 || cntLw > 0 || cntN > 0) {
      return "Media";
    }
  } else {
    return "Debil";
  }
}

/*
RETROALIMENTACIÓN

- El recorrido para reconocer mayúsculas y minúsculas está bien pensado.
- `contrasena.length > 6` deja fuera la longitud 6 y no detecta como inválidas
  las contraseñas de menos de 6 caracteres.
- Una contraseña fuerte necesita además tener 10 o más caracteres.
- La clasificación "media" depende de tener 8 o más caracteres; no depende de
  que haya una mayúscula, minúscula o dígito.
- El juez compara textos exactamente: deben ser "fuerte", "media", "debil" e
  "invalida", en minúsculas.
- Una función debe devolver algo en todos los caminos posibles.

VERSIÓN ALTERNATIVA — revisada
Se usa otro nombre para no reemplazar tu solución durante el entrenamiento.
*/
// function clasificarContrasenaAlternativa(contrasena) {
//   if (contrasena.length < 6 || contrasena.includes(" ")) {
//     return "invalida";
//   }

//   let tieneMayuscula = false;
//   let tieneMinuscula = false;
//   let tieneDigito = false;

//   for (let i = 0; i < contrasena.length; i++) {
//     const caracter = contrasena[i];

//     if (caracter >= "A" && caracter <= "Z") {
//       tieneMayuscula = true;
//     } else if (caracter >= "a" && caracter <= "z") {
//       tieneMinuscula = true;
//     } else if (caracter >= "0" && caracter <= "9") {
//       tieneDigito = true;
//     }
//   }

//   if (
//     contrasena.length >= 10 &&
//     tieneMayuscula &&
//     tieneMinuscula &&
//     tieneDigito
//   ) {
//     return "fuerte";
//   }

//   if (contrasena.length >= 8) {
//     return "media";
//   }

//   return "debil";
// }
