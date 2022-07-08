import { Router } from "express";
import { ProductsController } from "./controllers/productsController";

const productsController = new ProductsController()

export const router = Router()

router.post('/product', productsController.handleCreate)
router.delete('/product/:id', productsController.handleDelete)