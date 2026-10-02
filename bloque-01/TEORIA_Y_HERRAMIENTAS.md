# Ficha de Estudio C++: Arreglos y Formato con `<iomanip>` (`std::setw`)

> **Nota para Obsidian:** Puedes copiar y pegar esta nota directamente en tu bóveda. Incluye conceptos teóricos, sintaxis clave y ejemplos prácticos ejecutables.

---

## 1. Arreglos Unidimensionales (Arrays 1D)

### ¿Qué es un arreglo en la memoria?
Un arreglo es una secuencia de elementos del **mismo tipo** almacenados de forma **contigua** (uno exactamente al lado del otro) en la memoria RAM del ordenador.

```text
Índice:       [0]      [1]      [2]      [3]      [4]
Valor:        10       25       8        99       4
Dirección:  0x1000   0x1004   0x1008   0x100C   0x1010  (cada int ocupa 4 bytes)
```

### Declaración e Inicialización
```cpp
// Declarar con tamaño fijo (el tamaño debe ser conocido o constante)
int numeros[5];

// Declarar e inicializar con valores
int edades[5] = {18, 20, 25, 30, 40};

// C++ deduce el tamaño automáticamente (aquí n = 4)
int notas[] = {10, 8, 9, 7};
```

### La Regla de Oro de los Índices
* Si el arreglo tiene tamaño `N`, los índices válidos van desde **`0` hasta `N - 1`**.
* **Peligro común:** Acceder a `arreglo[N]` provoca **comportamiento indefinido** (buffer overflow o lectura de basura en memoria).

```cpp
int total = 5;
int datos[5] = {1, 2, 3, 4, 5};

// Recorrido clásico estándar:
for (int i = 0; i < total; i++) {
    // datos[i] accede al elemento en la posición i
}
```

---

## 2. Dominando `<iomanip>` y `std::setw`

### ¿Qué es `<iomanip>`?
Es la cabecera estándar de C++ para manipular la entrada y salida de datos (*Input/Output Manipulators*). Permite dar formato visual profesional a la terminal (tablas, columnas, decimales, etc.). Este es el primer paso para construir interfaces de terminal (**TUI**).

### ¿Para qué sirve `std::setw`?
`setw` viene de **"Set Width"** (establecer ancho). Define cuántos caracteres de espacio ocupará el **siguiente** valor que imprimas con `std::cout`.

> ⚠️ **REGLA CRUCIAL:** `setw` **NO es permanente**. Solo aplica al elemento que se imprime inmediatamente después. Si imprimes otro dato, debes volver a llamar a `setw`.

### Modificadores complementarios:
1. `std::left`: Alinea el texto a la izquierda dentro del ancho dado.
2. `std::right`: Alinea a la derecha (es el comportamiento por defecto de los números).
3. `std::setfill(caracter)`: Si el dato no llena todo el ancho, rellena los espacios vacíos con el carácter elegido (por defecto es un espacio `' '`).

---

## 3. Ejemplo Práctico: Tabla de Arreglo Formateada con `setw`

Guarda y compila este código para ver el poder visual de `<iomanip>`:

```cpp
#include <iostream>
#include <iomanip> // Requerido para setw, left, right, setfill

int main() {
    const int TAM = 5;
    int ids[TAM] = {101, 102, 103, 104, 105};
    int stock[TAM] = {5, 120, 45, 8, 300};
    double precio[TAM] = {12.50, 4.99, 89.00, 150.25, 3.10};

    // Encabezado de la tabla con columnas de ancho fijo
    std::cout << "============================================" << std::endl;
    std::cout << std::left 
              << std::setw(8)  << "ID" 
              << std::setw(15) << "CANTIDAD" 
              << std::setw(12) << "PRECIO ($)" << std::endl;
    std::cout << "============================================" << std::endl;

    // Imprimir las filas del arreglo
    for (int i = 0; i < TAM; i++) {
        std::cout << std::left  << std::setw(8)  << ids[i]
                  << std::right << std::setw(8)  << stock[i] << "       "
                  << std::right << std::setw(8)  << std::fixed << std::setprecision(2) << precio[i] 
                  << std::endl;
    }
    std::cout << "============================================" << std::endl;

    return 0;
}
```

### ¿Por qué esto conecta con tus metas futuras?
1. **Manejo de archivos:** Cuando leas o guardes reportes en disco, usarás estos mismos manipuladores con `std::ofstream`.
2. **Ciberseguridad y Servidores:** Los logs de red (direcciones IP, puertos, códigos de estado HTTP) se formatean en columnas fijas como esta para poder ser parseados fácilmente.
3. **Redes Neuronales:** En IA, los pesos de una red neuronal se representan como matrices de números flotantes. Al imprimirlos para depurar, `setw` y `setprecision` son indispensables para ver la matriz alineada.
