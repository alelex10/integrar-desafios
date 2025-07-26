"use strict";
let products = [];
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
    products.push({ ...product, id });
    console.log("Product created", products);
};
const updateProduct = (product, id) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { ...products[index], ...product };
    console.log("Product updated", products);
};
const deleteProduct = (product) => {
    const index = products.findIndex((p) => p.id === product.id);
    products.splice(index, 1);
    console.log("Product deleted", products);
};
