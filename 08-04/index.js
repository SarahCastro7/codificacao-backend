import { read, write } from "fs";
import fs from "fs/promises"; //isso faz que a gente consiga ler o conteudo que tem no arquivo FRUTAS.JSON
import { get } from "http";

async function readFrutas(){
    const data = await fs.readFile ("./frutas.json", "utf-8"); //aqui a gente le o arquivo frutas.json e converte ele para string
    const frutas = JSON.parse(data); //aqui a gente converte a string para um objeto JavaScript
    return frutas; //aqui a gente retorna o objeto frutas - conteudo contido do 'frutas.json
}
//essa funçõ fez a gente ler o arquivo frutas.json, recebendo esse conteudo como texto (converte o texto com 'JSON.parse' e assim retornando o array de frutas)

const Frutas = await readFrutas();
console.log(Frutas); //aqui a gente imprime o array de frutas no console

async function writeFruits(fruits) {
    const data = JSON.stringify(fruits, null, 2);  //stringify faz com que a gente converta o array de frutas para uma string, e o 'null, 2' é para formatar a string com indentação de 2 espaços
    await fs.writeFile("./fruits.json", data, "utf-8");
}

const frutas = await readFrutas ();
frutas.push({ id: 4, nome: "uva croc croc", cor: "verde"}); //aqui a gente adiciona uma nova fruta ao array de frutas
await writeFruits(frutas); //aqui a gente escreve o array de frutas no arquivo fruits.json

async function getAllFrutas () {
    const frutas = await readFrutas ();
    return frutas;
}

const allFrutas = await getAllFrutas ();
console.log("todas as frutas:   ");
console.log(allFrutas);

async function getFruitById(id) {
    const frutas = await readFrutas();
    const fruit = frutas.find(item => item.id === id);
    return fruit;
}

const fruta = await getFruitById(2);
console.log("fruta com id 2:   ");
console.log(fruta);

async function createFruta (nome) {
    const frutas = await readFrutas();
    
    const newFruta ={
        id: frutas.length > 0 ?
        frutas[frutas.length - 1].id + 1 : 1, //aqui a gente verifica se o array de frutas tem algum elemento, se tiver a gente pega o id do ultimo elemento e soma 1, se não tiver a gente atribui o id 1
        nome: nome  
    }
    frutas.push(newFruta);
    await writeFruits(frutas);
    return newFruta;

frutas.push (newFruta);
await writeFruits(frutas);
return newFruta;

}

const createdFruit = await createFruta("Melancia");
console.log("Fruta criada:");
console.log(createdFruit);

async function updateFruta (id, novoNome){
    const frutas = await readFrutas();

    const index = frutas.findIndex(item => item.id === id);

    if (index === -1) {
        return null; //aqui a gente verifica se o id da fruta existe, se não existir a gente retorna null
    }

    frutas[index].nome = novoNome;
    await writeFruits(frutas);
    return frutas[index];
}

const updatedFruta = await updateFruta(1, "maça");
console.log ("a fruta foi atualizada!!");
console.log(updateFruta);

async function deleteFruta(id) {
    const fruits = await readFrutas();

    const index = frutas.findIndex(item => item.id === Number(id));

    if (index === -1) {
        return false;
    }

    frutas.splice(index, 1);
    await writeFruits(frutas);
    return true;

}
    const deleted = await deleteFruta(3);
    console.log("essa fruta foi removida" , deleted);
    console.log(deleted); 
