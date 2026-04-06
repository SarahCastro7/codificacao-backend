import fs from 'fs/promises';

async function readFruits() {
    const data = await fs.readFile("./fruits.json", "utf-8");
    const fruits = JSON.parse(data);
    return fruits;
}

async function writeFruits(fruits) {
    const data = JSON.stringify(fruits, null, 2);
    await fs.writeFile("./fruits.json", data, "utf-8");
}

async function getAllFruits() {
    const fruits = await readFruits();
    return fruits;
}


async function getFruitById(id) {
    const fruits = await readFruits();
    const fruit = fruits.find(item => item.id === id);
    return fruit;
}

async function createFruit(nome) {
    const fruits = await readFruits();

    const newFruit = {
        id: fruits.length > 0 ? fruits[fruits.length - 1].id + 1 : 1,
        nome: nome
    };

    fruits.push(newFruit);

    await writeFruits(fruits);

    return newFruit;
}

async function updateFruit(id, novoNome) {
    const fruits = await readFruits();

    const index = fruits.findIndex(item => item.id === id);

    if (index === -1) {
        return null;
    }

    fruits[index].nome = novoNome;
    await writeFruits(fruits);
    return fruits[index];
}