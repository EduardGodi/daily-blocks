// Bloque 1 - Ejercicio 4: Inversión In-Place (Sin Arreglo Auxiliar)
//
// PROBLEMA:
// Tienes una secuencia de paquetes de red que llegaron en orden inverso.
// Necesitas invertir el arreglo directamente sobre sí mismo ("in-place").
//
// REGLA ESTRICTA:
// - NO puedes crear un segundo arreglo para copiar los datos al revés.
// - Debes usar la técnica de dos índices: uno al inicio (int i = 0) y otro al final (int j = TAM - 1).
// - En cada paso, intercambias los elementos y avanzas i++ y retrocedes j-- hasta que se crucen.
//
// EJEMPLO:
// Inicial:   {10, 20, 30, 40, 50}
// Final:     {50, 40, 30, 20, 10}

#include <iostream>

int main() {
    const int TAM = 6;
    int paquetes[TAM] = {10, 20, 30, 40, 50, 60};

    std::cout << "Original: ";
    for (int i = 0; i < TAM; i++) {
        std::cout << paquetes[i] << " ";
    }
    std::cout << std::endl;

    // ESCRIBE AQUÍ LA LÓGICA DE INVERSIÓN (DOS ÍNDICES):



    std::cout << "Invertido: ";
    for (int i = 0; i < TAM; i++) {
        std::cout << paquetes[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}
