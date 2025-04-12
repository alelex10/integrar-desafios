// 6 - sistema - de - gestión - de - productos;
//* Obtener los datos:
//* Realizar un fetch a https://fakestoreapi.com/products para obtener todos los productos

const URL = "https://fakestoreapi.com/products";
const fetchProducts = async () => {
	try {
		const response = await fetch(URL);
		if (!response.ok) throw new Error("Error al obtener los productos");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
const products = await fetchProducts();
// console.log("------------------ Productos ------------------")
// console.log(products)

//* Crear una función que filtre productos por categoría
const filterProductsByCategory = (products, category) => {
	return products.filter((product) => product.category === category);
};
// console.log("------------------ Filtrado por categoría ------------------")
// console.log(filterProductsByCategory(products, "electronics"));

//* Implementar una función que ordene productos por precio (ascendente/descendente)
const sortProductsByPrice = (products, order = "ascendant") => {
	return products.sort((a, b) => {
		return {
			ascendant: a.price - b.price,
			descendant: b.price - a.price,
		}[order];
	});
};
// console.log("------------------ Ordenar por precio ------------------")
console.log(sortProductsByPrice(products, "ascendant"));
// console.log(sortProductsByPrice(products, "descendant"));
//* Desarrollar una función que calcule el precio promedio por categoría
const AveragePriceByCategory = (products, category) => {
	const filteredProducts = filterProductsByCategory(products, category);
	const totalPrice = filteredProducts.reduce((acc, product) => acc + product.price, 0);
	return totalPrice / filteredProducts.length;
};
//* Crear una función que busque productos por nombre (incluso con coincidencias parciales)
const searchProductsByName = (products, name) => {
	return products.filter((product) => {
		return product.title.toLowerCase().includes(name.toLowerCase());
	});
};
//* Agrupar los productos en un objeto donde las claves (key) sean las categorías
const groupProductsByCategory = (products) => {
	return products.reduce(
		(acc, product) => {
			if (!acc[product.category]) {
				//* si es la primera vez que se encuentra un producto de esa categoría), esta línea crea una nueva entrada en el objeto acc para esa categoría.
				acc[product.category] = [];
			}
            //* Luego, se agrega el producto actual a la lista de productos de esa categoría.
			acc[product.category].push(product);
            //* Finalmente, se devuelve el acumulador acc, que contiene todas las categorías y sus productos correspondientes.
			return acc;
		},
		//* acc es el acumulador, que se inicializa como un objeto vacío {}.
		//* product es el elemento actual del array products que se está procesando en ese momento.
		{}
	);
};
//* Encontrar el producto más caro y el más barato de cada categoría
const findMostExpensiveAndCheapestProduct = (products) => {
    const groupedProducts = groupProductsByCategory(products);
    const result = {};
    //* itero sobre cada categoría, obteniento la "key" del objeto agrupado
    for (const category in groupedProducts) {
        //* ordeno los productos por precio ascendente
        //* accedo al array del producto de la categoría, con la key
        sortProductsByPrice(groupedProducts[category], "descendant");
        //* el primer elemento del array es el más caro y el último es el más barato
        result[category] = {
            mostExpensive: groupedProducts[category][0],
            cheapest: groupedProducts[category].at(-1),
        };
    }
    return result;
}