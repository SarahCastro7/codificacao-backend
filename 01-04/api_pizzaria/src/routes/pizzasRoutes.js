import express from 'express';
import {pizzaService} from '../services/pizzaService.js';

const router = express.Router();

router.get('/', (req, res) => {
  const pizzas = pizzaService.getAll();
  res.json(pizzas);

});

router.post('/', (req, res) => {
  const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ message: 'atenção! é necessario indormar o nome da pizza!' });
    }

  const novaPizza = pizzaService.create(nome)
    res.json(newPizza)
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;

  const pizzaUpdated = pizzaService.updatePatch(id, nome)

  if (!pizzaUpdated) {
    return res.status(404).json({ message: 'Pizza não encontrada!' });
  }
  res.json(pizzaUpdated);
})
router.put("/:id" , (req, res) => {
  const {id} = req.params;
  const {nome} = req.body;

    if (!nome) {
        return res.status(400).json({message: "atenção! é necessário informar o nome da pizza!"})
    }

    const pizzaUpdated = pizzaService.updatePut(id, {nome});

    if (!pizzaUpdated) {
        return res.status(404).json({ message: 'Pizza não encontrada!' });
    }
    res.json(pizzaUpdated);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const deleted = pizzaService.delete(id);

  if (!deleted) {
    return res.status(404).json({ message: "pizza não encontrada" });
  }

  res.status(204).send();
});


export default router;