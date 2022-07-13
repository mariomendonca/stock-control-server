import { Router } from "express";
import { ProductsController } from "./controllers/productsController";
import { PurchasesController } from "./controllers/purchasesController";

const productsController = new ProductsController()
const purchasesController = new PurchasesController()
export const router = Router()

router.post('/product', productsController.handleCreate)
router.get('/product', productsController.handleGetAll)
router.get('/product/:id', productsController.handleGetById)
router.put('/product/:id', productsController.handleUpdate)
router.delete('/product/:id', productsController.handleDelete)

router.post('/purchase', purchasesController.handleCreate)
router.get('/purchase', purchasesController.handleGetAll)
