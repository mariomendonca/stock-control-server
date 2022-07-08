import { Router } from "express";
import { ProductsController } from "./controllers/productsController";

const productsController = new ProductsController()

export const router = Router()

router.post('/product', productsController.handleCreate)
router.get('/product', productsController.handleGetAll)
router.get('/product/:id', productsController.handleGetById)
router.put('/product/:id', productsController.handleUpdate)
router.delete('/product/:id', productsController.handleDelete)