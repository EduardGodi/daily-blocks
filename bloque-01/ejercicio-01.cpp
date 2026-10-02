// Bloque 1 - Ejercicio 1: Filtrado y Promedio de Lecturas Válidas
//
// PROBLEMA:
// Un sistema de monitoreo registra una serie de lecturas numéricas enteras.
// Sin embargo, algunas lecturas son erróneas (valores negativos o cero).
//
// TU TAREA:
// 1. Recorrer el arreglo dado.
// 2. Contar cuántos valores son positivos estrictos (> 0).
// 3. Sumar solo los valores positivos y calcular su promedio exacto (con decimales).
// 4. Si NO existe ningún valor positivo, debes mostrar un mensaje de advertencia 
//    evitando la división entre cero.
//
// REGLA:
// - Usa bucles clásicos (for o while) e índices arr[i].
// - No uses punteros ni memoria dinámica.

#include <iostream>
#include <iomanip>

int main() {
    // Caso de prueba 1:
    const int TAM = 8;
    int lecturas[TAM] = {14, -3, 20, 0, -8, 35, 12, -1};

    // ESCRIBE AQUÍ TU CÓDIGO:
    // Pistas:
    // - Necesitas un acumulador para la suma (ej. int suma = 0).
    // - Un contador de elementos válidos (ej. int validos = 0).
    // - Ojo con el cálculo del promedio: (double)suma / validos para no perder decimales.


    return 0;
}
