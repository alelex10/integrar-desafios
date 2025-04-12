# 31 de Marzo - Calculadora de Préstamos
Personalizacion del `path` de la consola:`PS1="\[\e[1;36m\]\W\[\e[0m\]\$:"`
<!-- PS1="\[\e[1;36m\]\W\[\e[0m\]\$:" -->


> Una empresa de prestamos bancarios nos contrató para desarrollar una calculadora de préstamos en JavaScript que determine las cuotas mensuales, el total a pagar y los intereses generados para diferentes tipos de préstamos.

## Requisitos del cliente

1. **Variables de entrada:**
   - `loanAmount`: Cantidad de dinero solicitada (entre 1000 y 50000)
   - `annualInterestRate`: Tasa de interés anual (entre 5% y 20%)
   - `termInMonths`: Duración del préstamo en meses (entre 6 y 60)
   - `clientType`: Tipo de cliente ("new", "returning" o "premium")

2. **Funciones a implementar:**
   - `calculateMonthlyPayment(amount, rate, term)`: Calcula la cuota mensual del préstamo
   - `calculateTotalPayment(monthlyPayment, term)`: Calcula el monto total a pagar
   - `calculateTotalInterest(totalPayment, loanAmount)`: Calcula el interés total generado
   - `applyDiscount(monthlyPayment, clientType)`: Aplica descuento según tipo de cliente:
     - Cliente nuevo ("new"): Sin descuento
     - Cliente recurrente ("returning"): 2% de descuento
     - Cliente premium ("premium"): 5% de descuento

3. **Validaciones:**
   - Verificar que el monto del préstamo esté dentro del rango permitido
   - Comprobar que la tasa de interés sea válida
   - Validar que el plazo esté dentro de los límites establecidos
   - Verificar que el tipo de cliente sea uno de los tres permitidos

4. **Resultados a mostrar:**
   - Cuota mensual (con y sin descuento)
   - Total a pagar durante toda la vida del préstamo
   - Monto total de intereses a pagar
   - Mensaje personalizado según la proporción de intereses respecto al préstamo

## Código base para empezar:

```javascript
// Datos de entrada (para pruebas)
const loanAmount = 10000;
const annualInterestRate = 12;  // 12%
const termInMonths = 24;
const clientType = "returning";

// Implementa las funciones necesarias

// Función principal
function calculateLoan(amount, rate, term, type) {
    // Implementa las validaciones aquí
    
    // Calcula la cuota mensual, total a pagar e intereses
    
    // Aplica el descuento según tipo de cliente
    
    // Retorna los resultados
}

// Ejecuta el programa y muestra resultados
const result = calculateLoan(loanAmount, annualInterestRate, termInMonths, clientType);
console.log("=== DETALLES DEL PRÉSTAMO ===");
// Muestra los resultados aquí
```