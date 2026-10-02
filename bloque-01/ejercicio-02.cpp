// Bloque 1 - Ejercicio 2: Extremos e Índices de Separación
//
// PROBLEMA:
// Tienes un arreglo con temperaturas registradas durante el día (pueden ser bajo cero).
//
// TU TAREA:
// 1. Encontrar la temperatura máxima y la temperatura mínima.
// 2. Guardar las posiciones exactas (los índices 0-indexed) donde ocurren.
// 3. Calcular la distancia en posiciones entre ambos extremos (|posMax - posMin|).
//
// CUIDADO CON ESTE CASO LÍMITE:
// - ¿Cómo inicializas las variables 'max' y 'min'?
//   Si las inicializas en 0 y todas las temperaturas son negativas (ej: {-5, -12, -3}),
//   tu programa dirá erróneamente que el máximo es 0. 
//   ¡Inicialízalas siempre con el primer elemento del arreglo (arr[0])!

#include <iostream>
#include <cmath> // Para std::abs() si lo deseas usar

int main() {
    const int TAM = 6;
    int temperaturas[TAM] = {-4, -15, 8, 22, -1, 10};

    // ESCRIBE AQUÍ TU CÓDIGO:



    return 0;
}
