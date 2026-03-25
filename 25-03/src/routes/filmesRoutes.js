import express from 'express'
import filmesServices from './services/filmesServices.js'

const router = express.Router();

router.get('/' , (req, res ) => {
    res.json(filmesServices.getALL())
});

export default router;