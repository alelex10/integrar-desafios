## Explicación detallada del comportamiento de `var` vs `let` en el ejemplo con `setTimeout`

Cuando trabajamos con asincronismo en JavaScript, especialmente con bucles y funciones como `setTimeout`, el uso de `var` y `let` puede tener efectos muy diferentes debido a la forma en que se manejan los alcances y los cierres (closures).

### `var` - Alcance de función (o global)

*   Cuando declaras `i` sin `let` ni `const`, JavaScript lo interpreta como `var i`. Esto significa que `i` tiene un alcance de función (o global si la declaras fuera de cualquier función).  Existe solo una variable `i` dentro de toda la función `timerVar`.
*   Todos los callbacks de `setTimeout` apuntan a la *misma* variable `i` en memoria.
*   El bucle `for` se ejecuta rápidamente y programa las llamadas a `setTimeout`. Sin embargo, los callbacks dentro de `setTimeout` no se ejecutan inmediatamente.
*   Para cuando los callbacks de `setTimeout` comienzan a ejecutarse, el bucle `for` ya ha terminado y el valor de `i` es 11.
*   Como todos los callbacks de `setTimeout` referencian la *misma* variable `i`, todos imprimen el valor final de `i`, que es 11.

### `let` - Alcance de bloque

*   Cuando usas `let`, la variable `i` se declara con un alcance de bloque.  En el contexto del bucle `for`, esto significa que *cada iteración del bucle crea una nueva variable `i`*.
*   Aunque todas estas variables se llaman `i`, son variables diferentes ubicadas en diferentes lugares de la memoria.
*   Cada callback de `setTimeout` apunta a su *propia* versión de `i`, que conserva el valor que tenía `i` en el momento en que se creó el callback.
*   Cada vez que el bucle `for` itera, se crea una *nueva* variable `i`, y el callback de `setTimeout` "captura" (a través del cierre) esta *nueva* variable `i`.

### Cierre (Closure)

El cierre es la capacidad de una función para recordar y acceder a variables de su ámbito léxico circundante, incluso después de que la función externa haya terminado de ejecutarse. En este caso:

*   Con `var`, todos los callbacks de `setTimeout` se cierran sobre la *misma* variable `i`.
*   Con `let`, cada callback de `setTimeout` se cierra sobre una *nueva* variable `i` creada en cada iteración del bucle.

### Resumen

| Característica      | `var`                                         | `let`                                                              |
| ------------------- | --------------------------------------------- | ------------------------------------------------------------------ |
| Alcance             | Función (o global)                            | Bloque                                                              |
| Variables creadas | Una sola variable compartida                  | Una nueva variable en cada iteración del bucle                       |
| Cierre              | Cierre sobre la misma variable               | Cierre sobre una nueva variable en cada iteración                    |
| Resultado           | Todos los callbacks ven el valor final de `i` | Cada callback ve el valor de `i` en el momento de su creación |

La clave está en entender que `let` proporciona una copia separada de la variable en cada iteración, lo que permite que cada callback de `setTimeout` capture el valor correcto en el momento de su creación. `var`, por otro lado, solo proporciona una única variable que es modificada por el bucle, llevando a que todos los callbacks vean el valor final de la variable.