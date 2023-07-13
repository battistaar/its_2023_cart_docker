"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const it_1 = require("@faker-js/faker/locale/it");
function generateRandomProduct() {
    return {
        name: it_1.faker.commerce.product(),
        description: it_1.faker.commerce.productDescription(),
        netPrice: parseFloat(it_1.faker.commerce.price()),
        weight: it_1.faker.number.int({ min: 50, max: 2000 }),
        discount: it_1.faker.number.float({ min: 0, max: 1, precision: 0.01 })
    };
}
function generateProducts(num) {
    const data = Array.from({ length: num }, () => generateRandomProduct());
    (0, node_fs_1.writeFileSync)('./products.json', JSON.stringify(data), { encoding: 'utf-8' });
}
generateProducts(200);
