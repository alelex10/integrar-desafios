interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
}
type CreateProduct = Omit<Product, "id">;
type UpdateProduct = Partial<Omit<Product, "id">>;
type DeleteProduct = Pick<Product, "id">;

let products: Product[] = [];
const IDs: Set<number> = new Set();

const generateIdRandom = () => {
	let num: number;
	do {
		num = Math.floor(Math.random() * 1000);
	} while (IDs.has(num));

	return num;
};

const createProduct = (product: CreateProduct) => {
	const id = generateIdRandom();
	IDs.add(id);
    products.push({ ...product, id });
    console.log("Product created", products);
};

const updateProduct = (product: UpdateProduct, id: number) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { ...products[index], ...product };
    console.log("Product updated", products);

};

const deleteProduct = (product: DeleteProduct) => {
    const index = products.findIndex((p) => p.id === product.id);
    products.splice(index, 1);
    console.log("Product deleted", products);
};