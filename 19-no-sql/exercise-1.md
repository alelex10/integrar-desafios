# Sistema de Gestión Académica

## Ejercicio 1: Crear un Sistema de Gestión Académica

### Requisitos

1. Crear una colección llamada `profesores` con validación de esquema que incluya los siguientes campos requeridos:
   - `nombre` (string, mínimo 2 caracteres)
   - `edad` (entero, entre 25 y 70)
   - `especialidad` (string)
   - `añosExperiencia` (entero, mínimo 0)

```js
db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "edad", "especialidad", "anosExperiencia"],
      properties: {
        nombre: { bsonType: "string", minLength: 2 },
        edad: { bsonType: "int", minimum: 25, maximum: 70 },
        especialidad: { bsonType: "string" },
        anosExperiencia: { bsonType: "int", minimum: 0 },
      },
    },
  },
});
```

2. Insertar al menos tres documentos de ejemplo que contengan también los siguientes campos adicionales:

   - `email`
   - `departamento`
   - `salario`
   - `activo` (booleano)

```js
db.profesores.insertMany([
  {
    nombre: "Juan",
    edad: 30,
    especialidad: "Matemática",
    anosExperiencia: 5,
    email: "M5yYK@example.com",
    departamento: "Matemática",
    salario: 5000,
    activo: true,
  },
  {
    nombre: "Maria",
    edad: 35,
    especialidad: "Física",
    anosExperiencia: 10,
    email: "2Ct8V@example.com",
    departamento: "Física",
    salario: 6000,
    activo: true,
  },
  {
    nombre: "Pedro",
    edad: 40,
    especialidad: "Química",
    anosExperiencia: 15,
    email: "E9rGt@example.com",
    departamento: "Química",
    salario: 7000,
    activo: true,
  },
  {
    nombre: "Luis",
    edad: 45,
    especialidad: "Informática",
    anosExperiencia: 20,
    email: "b7oZV@example.com",
    departamento: "Informática",
    salario: 8000,
    activo: true,
  },
  {
    nombre: "Ana",
    edad: 50,
    especialidad: "Biología",
    anosExperiencia: 25,
    email: "rB7Hs@example.com",
    departamento: "Biología",
    salario: 9000,
    activo: true,
  },
]);
```

3. Realizar las siguientes consultas:
   - Buscar todos los profesores con más de 15 años de experiencia.

```js
db.profesores.find({ anosExperiencia: { $gt: 15 } });
```

- Calcular el promedio de edad, experiencia y salario de los profesores activos.

```js
db.profesores.aggregate([
  {
    $group: {
      _id: null,
      promedioEdad: { $avg: "$edad" },
      promedioExperiencia: { $avg: "$anosExperiencia" },
      promedioSalario: { $avg: "$salario" },
    },
  },
]);
```

- Generar estadísticas por departamento: número de profesores, experiencia total, salario promedio y listado de nombres.

```js
db.profesores.aggregate([
  {
    $group: {
      _id: "$departamento",
      numProfesores: { $sum: 1 },
      totalExperiencia: { $sum: "$anosExperiencia" },
      salarioPromedio: { $avg: "$salario" },
      nombres: { $addToSet: "$nombre" },
    },
  },
])
```