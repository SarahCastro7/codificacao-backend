import express from 'express'
import { serverServices } from '../services/serverServices.js'

const route = express.Router()  

route.get("/" , (req , res) => {
    res.json(serverServices.getAll())
})

export default route