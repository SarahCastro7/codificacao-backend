const pizzas = [
  { id: 1, name: "frango com catupiry" },
  { id: 2, name: "pepperoni" },
  { id: 3, name: "quatro queijos" },
  { id: 4, name: "calabresa" },
];

class PizzaService {
  getAll() {
    return pizzas;
  }

  getById(id) {
    const pid = parseInt(id);
    return pizzas.find((p) => p.id === pid) || null;
  }

  create(name) {
    const newId = pizzas.length > 0 ? pizzas[pizzas.length - 1].id + 1 : 1;
    const newPizza = { id: newId, name };
    pizzas.push(newPizza);
    return newPizza;
  }

  updatePatch(id, name) {
    const index = pizzas.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return null;
    if (name) {
      pizzas[index].name = name;
    }
    return pizzas[index];
  }

  updatePut(id, newData) {
    const index = pizzas.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return false;
    const updatedPizza = { id: parseInt(id), ...newData };
    pizzas[index] = updatedPizza;
    return updatedPizza;
  }

  deleteById(id) {
    const index = pizzas.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return false;
    pizzas.splice(index, 1);
    return true;
  }
}

export const pizzaService = new PizzaService();