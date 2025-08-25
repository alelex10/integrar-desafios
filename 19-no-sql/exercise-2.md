# 📚 Ejercicio 2: Sistema de Cursos y Matriculaciones

Diseña una colección para administrar los cursos y su proceso de inscripción.

**Requisitos:**

1. Crear una colección llamada `cursos` e insertar al menos dos documentos con los siguientes campos:
   - `codigo` (ej. "MAT101")
   - `nombre`
   - `creditos`
   - `profesorId` (relación con la colección `profesores`)
   - `horario`: un objeto con los días y el horario del curso.
   - `cupoMaximo`
   - `inscritos`: un arreglo inicialmente vacío.

```js
db.createCollection("cursos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "codigo",
        "nombre",
        "creditos",
        "profesorId",
        "horario",
        "cupoMaximo",
        "inscritos",
      ],
      properties: {
        codigo: { bsonType: "string" },
        nombre: { bsonType: "string" },
        creditos: { bsonType: "int" },
        profesorId: { bsonType: "objectId" },
        horario: { bsonType: "object" },
        cupoMaximo: { bsonType: "int" },
        inscritos: { bsonType: "array" },
      },
    },
  },
});
```

```js
db.cursos.insertMany([
  {
    codigo: "MAT101",
    nombre: "Matemática I",
    creditos: 4,
    profesorId: "68aa0785255df48fca89b03d",
    horario: { lunes: "09:00-11:00", martes: "13:00-15:00" },
    cupoMaximo: 20,
    inscritos: [],
  },
  {
    codigo: "FIS101",
    nombre: "Física I",
    creditos: 4,
    profesorId: "68aa0785255df48fca89b03e",
    horario: { miercoles: "09:00-11:00", jueves: "13:00-15:00" },
    cupoMaximo: 15,
    inscritos: [],
  },
]);
```

2. Matricular un alumno en un curso agregando al arreglo `inscritos` un objeto con:

   - `alumnoId`
   - `fechaInscripcion` (fecha actual)
   - `estado` (ej. "activo")

```js
db.cursos.updateOne(
  { codigo: "MAT101" },
  {
    $push: {
      inscritos: {
        alumnoId: "68aa0785255df48fca89b03f",
        fechaInscripcion: new Date(),
        estado: "activo",
      },
    },
  }
);
```

3. Consultar los cursos con cupos disponibles, calculando el número de cupos restantes y mostrando solo aquellos con disponibilidad.

```js
db.cursos.aggregate([
  {
    $addFields: {
      disponibilidad: {
        $subtract: ["$cupoMaximo", { $size: "$inscritos" } ]
      }
    }
  },
  {
    $match: {
      disponibilidad: { $gt: 0 }
    }
  },
  {
    $project: {
      _id: 1,
      codigo: 1,
      nombre: 1,
      cupoMaximo: 1,
      inscritos: 1,
      disponibilidad: 1
    }
  }
]);
```