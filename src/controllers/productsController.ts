import { Request, Response } from "express";
import { prisma } from "../prismaClient";

export class ProductsController {
  async handleCreate(req: Request, res: Response): Promise<Response> {
    const {
      name,
      price,
      quantity
    } = req.body
    try {
      const product = await prisma.product.create({
        data: {
          name,
          price,
          quantity
        }
      })
      return res.status(201).json(product)
    } catch {
      return res.status(400).send()
    }
  }

  async handleUpdate(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const {
      name,
      price,
      quantity
    } = req.body

    try {
      await prisma.product.update({
        where: { id },
        data: {
          name,
          price,
          quantity
        }
      })
      const updatedProduct = await prisma.product.findUnique({
        where: { id }
      })

      return res.status(200).json(updatedProduct)
    } catch {
      return res.status(400).send()
    }
  }

  async handleDelete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
      await prisma.product.delete({
        where: { id }
      })
      return res.status(204).send()
    } catch {
      return res.status(400).send()
    }
  }
}
