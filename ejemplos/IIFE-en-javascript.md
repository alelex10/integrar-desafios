# ¿Qué es una IIFE en JavaScript? 💨

En JavaScript, seguramente en más de una ocasión te encontraste con la necesidad de ejecutar un bloque de código **una sola vez**, sin dejar rastros (variables, funciones, etc.) en el entorno global. Es decir, algo así como hacer una *mini-función* que se autoejecute y que después desaparezca en las sombras 🥷🏼.

Ahí es donde entra en juego nuestra protagonista de hoy: la **IIFE**, que significa **Immediately Invoked Function Expression** (Expresión de Función Invocada Inmediatamente).

## Pero… ¿cómo se ve una IIFE? 🤔

Vamos a ver primero cómo luce la sintaxis:

```js
(function() {
  console.log('¡Hola desde una IIFE!');
})();
```

Eso parece un poco raro al principio… una función encerrada entre paréntesis y seguida de `()` 🥴. Pero tranqui, ahora desglosamos paso a paso:

1. `(function() { ... })`: esto convierte la declaración de la función en una **expresión**. No estamos declarando una función con nombre, sino que la estamos preparando para ser ejecutada en el acto.
2. `()`: estos paréntesis al final son los que ejecutan inmediatamente esa función.

## ¿Por qué usar una IIFE? 🤌🏻

Imaginá que tenés que encapsular lógica que no querés que interfiera con otras partes de tu código. Una IIFE te permite eso, porque todo lo que declares ahí adentro **vive y muere ahí mismo**. Por ejemplo:

```js
(function() {
  const secret = "🙊 Este dato es privado";
  console.log(secret); // 🙊 Este dato es privado
})();

console.log(secret); // ❌ ReferenceError: secret is not defined
```

🎉 ¡Boom! Encapsulaste variables sin contaminar el scope global.

## ¿Y qué pasa si quiero pasarle parámetros? 🧐

Las IIFEs también pueden recibir argumentos, como cualquier otra función:

```js
(function(name) {
  console.log(`Hola ${name}, esto es una IIFE con argumentos 😎`);
})("Santiago");
```

💫 Esto es ideal si querés pasarle algún valor desde afuera, pero seguir manteniendo todo el encapsulamiento.

## Ejemplo más elaborado

### Sin IIFE

```js
function setup() {
  const user = "Santiago";
  const isLogged = true;

  if (isLogged) {
    console.log(`Bienvenido, ${user}`);
  }
}

setup();
// setup sigue existiendo en el scope global
```

Esto funciona, pero la función `setup` queda accesible después de su ejecución. Si solo la querés usar una vez, no tiene mucho sentido que quede expuesta.

### Con IIFE

```js
(() => {
  const user = "Santiago";
  const isLogged = true;

  if (isLogged) {
    console.log(`Bienvenido, ${user}`);
  }
})();

// Nada queda en el scope global. Clean ✨
```

## 💡 Conclusión rápida

- Una **IIFE** es una función que se define y se ejecuta inmediatamente.
- Sirve para **encapsular lógica** y evitar **contaminar el scope global**.
- Acepta **argumentos** y puede escribirse con la **sintaxis moderna** de arrow functions.

¿Te animás a usar una **IIFE **en tu próximo bloque de código? 🤓☝🏻