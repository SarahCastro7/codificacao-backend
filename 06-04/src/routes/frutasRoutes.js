import frutasServices from '../services/frutasServices.js';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    const frutas = frutasServices.getAllFrutas();
    res.json(frutas);
});

export default router;