# ¿Qué es una Shallow Copy y una Deep Copy? 🧠

Cuando trabajamos con objetos o arrays en JavaScript, muchas veces necesitamos **copiarlos** para usarlos en otro lugar sin modificar el original. Hasta ahí, todo suena sencillo. Pero... 👀 ¿Qué tipo de copia estamos haciendo? ¿Realmente estamos copiando todo? ¿O sólo la "punta del iceberg"? ❄️

Veamos un ejemplo básico que a primera vista no parece tener trampa:

```js
const user = {
  name: "Santiago",
  age: 28
}

const copyUser = user

copyUser.name = "Lucía"

console.log(user.name) // 😱 ¡Dice "Lucía"!
```

🤯 ¿QUÉ PASÓ ACÁ? ¡Si yo quería una copia!

Lo que pasó es que hicimos una **copia por referencia**, no una copia real del objeto. Eso significa que **ambas variables apuntan al mismo lugar en memoria**, y por eso al modificar una, también se modifica la otra.

Ahora sí: entremos al mundo de **Shallow Copy** y **Deep Copy**, que son dos formas distintas de **copiar objetos y arrays sin caer en la trampa** que vimos recién.

## ¿Qué es una Shallow Copy? 🫧

Una **shallow copy** o *copia superficial* es una forma de duplicar un objeto, pero **solo copia el primer nivel** de propiedades. Si esas propiedades son valores primitivos (números, strings, booleanos), está todo bien ✅. Pero si esas propiedades son otros objetos o arrays (recordemos que los arrays en JavaScript también son objetos), **seguimos compartiendo la referencia con el original** 😬.

```js
const user = {
  name: "Santiago",
  preferences: {
    theme: "dark"
  }
}

const shallowCopy = { ...user }

shallowCopy.preferences.theme = "light"

console.log(user.preferences.theme) // 😱 ¡También cambió!
```

📌 Aunque usamos el spread operator `{ ...user }`, eso solo copia el objeto principal. Las propiedades internas como `preferences` siguen apuntando al mismo objeto.

## ¿Qué es una Deep Copy? 🕳️

Una **deep copy** o *copia profunda* hace una copia de **todo el objeto, incluyendo sus propiedades anidadas**. Así, cada parte del nuevo objeto es totalmente independiente del original.

Pero... ¿cómo hacemos una deep copy en JavaScript? 🤔 ¿Con qué métodos o técnicas podríamos lograr una copia **realmente completa**?

Una de las opciones disponibles, es utilizar `JSON.stringify(object)` para transformar el objeto a un string, y luego utilizar `JSON.parse(stringObject)` para realizar el paso inverso y obtener un objeto con todo el contenido pero referencias nuevas. Esto se puede hacer en una misma línea:

```js
const user = {
  name: "Santiago",
  preferences: {
    theme: "dark"
  }
}

const deepCopy = JSON.parse(JSON.stringify(user))

deepCopy.preferences.theme = 'ligth' // 🧙🏻‍♂️ El hechicero de JS lo hizo nuevamente y no se modifica el objeto original
```

💫 Otra opción que podemos usar es utilizar `structuredClone(object)` lo cual nos devolverá la copia profunda del objeto que le pasemos, es importante saber que mientras más complejo sea el objeto más lenta será esta copia, así que siempre tenemos que evaluar si conviene o no, quizás con las otras opciones vistas anteriormente se puede realizar.

Prueben distintas formas y evalúen siempre cual les conviene en cada caso <:7190_linkpepehype:721053616353575054>
# ¿Qué es una Shallow Copy y una Deep Copy? 🧠

Cuando trabajamos con objetos o arrays en JavaScript, muchas veces necesitamos **copiarlos** para usarlos en otro lugar sin modificar el original. Hasta ahí, todo suena sencillo. Pero... 👀 ¿Qué tipo de copia estamos haciendo? ¿Realmente estamos copiando todo? ¿O sólo la "punta del iceberg"? ❄️

Veamos un ejemplo básico que a primera vista no parece tener trampa:

