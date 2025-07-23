"use strict";
const IDs = new Set();
const generateIdRandom = () => {
    let num;
    do {
        num = Math.floor(Math.random() * 1000);
    } while (IDs.has(num));
    return num;
};
const createProduct = (product) => {
    const id = generateIdRandom();
    IDs.add(id);
    return { ...product, id };
};
const updateProduct = (product) => {
    return product;
};
const deleteProduct = (product) => {
    return product;
};
const product1 = createProduct({ name: "Product 1", price: 100, description: "Description 1" });
const product2 = updateProduct({ name: "Product 2", price: 200 });
const product3 = deleteProduct({ id: 3 });
console.log(product1, product2, product3);
