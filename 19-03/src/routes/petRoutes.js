import express from 'express';
import petService from './services/petServices.js';

const router = express.Router();

// GET /pets/ -> list all pets
router.get('/', (req, res) => {
	try {
		const pets = petServices.getALL();
		res.json(pets);
	} catch (err) {
		res.status(500).json({ error: 'Failed to fetch pets' });
	}
});

export default router;