interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
}
const IDs: Set<number> = new Set();
type CreateProduct = Omit<Product, "id">;
type UpdateProduct = Partial<Omit<Product, "id">>;
type DeleteProduct = Pick<Product, "id">;

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
	return { ...product, id };
};

const updateProduct = (product: UpdateProduct) => {
    return product;
};

const deleteProduct = (product: DeleteProduct) => {
    return product;
};

const product1 = createProduct({ name: "Product 1", price: 100, description: "Description 1" });
const product2 = updateProduct({ name: "Product 2", price: 200 });
const product3 = deleteProduct({ id: 3 });
