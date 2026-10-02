// Bloque 1 - Ejercicio 3: Detección de la Racha Más Larga
//
// PROBLEMA:
// En un servidor de ciberseguridad, se registran los intentos de acceso fallidos (0)
// o exitosos (1). Un atacante o usuario genera una secuencia.
//
// TU TAREA:
// Encontrar la longitud de la racha continua más larga de éxitos (números 1 consecutivos).
//
// EJEMPLO:
// Arreglo: {1, 1, 0, 1, 1, 1, 0, 1}
// - Primera racha de 1s: longitud 2
// - Segunda racha de 1s: longitud 3  <-- ESTA ES LA MÁXIMA
// - Tercera racha de 1s: longitud 1
// Salida esperada: "Racha máxima consecutiva: 3"
//
// CONSEJO DE LÓGICA:
// Necesitas dos variables:
// - int rachaActual = 0;  // crece cada vez que ves un 1, y se resetea a 0 cuando ves un 0.
// - int rachaMaxima = 0;  // guarda el récord histórico más alto.

#include <iostream>

int main() {
    const int TAM = 10;
    int accesos[TAM] = {1, 0, 1, 1, 1, 0, 1, 1, 0, 1};

    // ESCRIBE AQUÍ TU CÓDIGO:



    return 0;
}
