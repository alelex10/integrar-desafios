//* Crear una interfaz Product con propiedades como nombre, precio, stock y una función para calcular el valor total. */
interface Product {
	name: string;
	price: number;
	stock: number;
	calculateTotalProduct: (stock: number, price: number) => number;
}

interface Cart {
	addProduct: (product: Product) => void;
	removeProduct: (product: Product) => void;
	calculateTotalCart: () => number;
}

const calculateTotalProduct = (stock: number, price: number): number => {
	return stock * price;
};

//* Implementar un sistema de tipos para un carrito de compras con funciones para añadir/eliminar productos y calcular el total. */

const cart: Product[] = [];

const addProduct = (product: Product): void => {
	cart.push(product);
	console.log(`${product.name} added to cart`);
};

const removeProduct = (product: Product): void => {
	const index = cart.indexOf(product);
	if (index !== -1) {
		cart.splice(index, 1);
		console.log(`${product.name} removed from cart`);
	}
};

const calculateTotalCart = (): number => {
	let total = 0;
	for (const product of cart) {
		total += product.price * product.stock;
	}
	console.log(`Total cart value: ${total}`);
	return total;
};



const product1: Product = {
	name: "Laptop",
	price: 1200.0,
	stock: 3,
	calculateTotalProduct: (s, p) => s * p,
};

const product2: Product = {
	name: "Book",
	price: 15.99,
	stock: 10,
	calculateTotalProduct: (s, p) => s * p,
};

const product3: Product = {
	name: "Headphones",
	price: 80.5,
	stock: 5,
	calculateTotalProduct: (s, p) => s * p,
};

// Add example products to cart
addProduct(product1);
addProduct(product2);
addProduct(product3);

// Calculate total cart value
calculateTotalCart();

// Remove a product from cart
removeProduct(product2);

// Calculate total cart value again
calculateTotalCart();