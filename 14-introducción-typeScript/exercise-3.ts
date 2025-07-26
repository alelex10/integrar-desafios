//* Implementar un sistema de tipos para un carrito de compras con funciones para añadir/eliminar productos y calcular el total.
interface Book {
    title: string;
    author: string;
}
const books = [
	{ title: "El Aleph", author: "Jorge Luis Borges" },
	{ title: "La ciudad y los perros", author: "Mario Vargas Llosa" },
	{ title: "Cien años de soledad", author: "Gabriel García Márquez" },
	{ title: "Rayuela", author: "Julio Cortázar" },
	{ title: "Ficciones", author: "Jorge Luis Borges" },
	{ title: "El hacedor", author: "Jorge Luis Borges" },
	{ title: "Los pasos perdidos", author: "Alejo Carpentier" },
	{ title: "El reino de este mundo", author: "Alejo Carpentier" },
	{ title: "La fiesta del chivo", author: "Mario Vargas Llosa" },
	{ title: "La tía Julia y el escribidor", author: "Mario Vargas Llosa" },
	{ title: "Crónica de una muerte anunciada", author: "Gabriel García Márquez" },
	{ title: "El amor en los tiempos del cólera", author: "Gabriel García Márquez" },
	{ title: "Bestiario", author: "Julio Cortázar" },
	{ title: "Las armas secretas", author: "Julio Cortázar" },
];
//* Dado un array de libros, implementar una función filterBooksByAuthor( ) que reciba por parámetros dicho array y un string con el nombre de un autor, y devuelva un nuevo array con libros del autor indicado.

function filterBooksByAuthor(books: Book[], author : string) {
	return books.filter((book) => book.author === author);
}
console.log("------------------ Filtro por Autor ------------------");
console.log(filterBooksByAuthor(books, "Jorge Luis Borges"));

//* A partir de lo realizado en la primera parte, utilizar la función para obtener todos los libros de un autor a elección, luego mediante métodos de array modificar el nombre del autor de todos los libros filtrados.

console.log("------------------ Modificación de autores ------------------");
const modifiedBooks = (modified: string) =>
	filterBooksByAuthor(books, "Jorge Luis Borges").map((book) => ({
		...book,
		author: modified,
	}));

console.log(modifiedBooks("Autor Modificado"));
//*Verificar que si se muestra en consola los libros filtrados se verá el autor modificado. ¿Qué sucede si se muestra en consola el array original?

//* Modificar la función de la primera parte para que ahora funcione si mando el nombre completo del autor, o solo su apellido (mejorar el filtro). Por ejemplo, la función debe devolver lo siguiente, ya sea si le mando ‘Jorge Luis Borges’ o ‘Borges’:

console.log("------------------ Tercera parte ------------------");

console.log(filterBooksByAuthor(books, "Borges"));

console.log("------------------- Cuarta parte ------------------");
console.log(
	"para crear una copia del array original se usa el operador spread (...) para crear una copia superficial(no una copia profunda) del objeto libro, y luego se modifica la propiedad author con el nuevo valor."
);
