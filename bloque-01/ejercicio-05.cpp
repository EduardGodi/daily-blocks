// Bloque 1 - Ejercicio 5: Debugging (Caza de Bugs en Arreglos)
//
// CONTEXTO:
// Un compañero escribió este programa para encontrar el valor mínimo en una lista 
// de temperaturas y calcular el porcentaje de valores que estuvieron bajo cero.
// Sin embargo, el programa tiene 3 BUGS GRAVES (uno de ellos provoca lecturas de memoria fuera de rango).
//
// TU MISIÓN:
// 1. Identificar y corregir los 3 errores en el código.
// 2. NO borres el código original; comenta los errores y escribe la corrección adecuada.
//
// LISTA DE ERRORES A BUSCAR:
// - Bug 1: Error en la condición límite del bucle for (fuera de índice).
// - Bug 2: Inicialización incorrecta del valor mínimo.
// - Bug 3: Pérdida de decimales (división entera) al calcular el porcentaje.

#include <iostream>
#include <iomanip>

int main() {
    const int TAM = 5;
    int temps[TAM] = {-8, -2, -15, -4, -6};

    // --- CÓDIGO CON BUGS (CORRÍGELO AQUÍ): ---

    // Bug: inicializar min en 0 cuando todos son negativos
    int minimo = 0; 
    int bajoCero = 0;

    // Bug: condición del bucle provoca acceso fuera del arreglo
    for (int i = 0; i <= TAM; i++) { 
        if (temps[i] < minimo) {
            minimo = temps[i];
        }
        if (temps[i] < 0) {
            bajoCero++;
        }
    }

    // Bug: división entera trunca el porcentaje a 0
    double porcentaje = (bajoCero / TAM) * 100; 

    // --- FIN DEL CÓDIGO CON BUGS ---

    std::cout << "Temperatura mínima encontrada: " << minimo << std::endl;
    std::cout << "Cantidad de temperaturas bajo cero: " << bajoCero << std::endl;
    std::cout << "Porcentaje bajo cero: " << porcentaje << "%" << std::endl;

    return 0;
}
