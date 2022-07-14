import { Request, Response } from "express"
import { prisma } from "../prismaClient"

export class PurchasesController {
  async handleCreate(req: Request, res: Response): Promise<Response> {
    const {
      totalPrice,
      productsIds,
    } = req.body

    try {
      const purchase = await prisma.purchase.create({
        data: {
          totalPrice,
          products: {
            connect: productsIds
          }
        },
        include: {
          products: true
        }

      })
      return res.status(200).json(purchase)
    } catch (err) {
      console.error(err)

      return res.status(400).json()
    }
  }

  async handleGetAll(req: Request, res: Response): Promise<Response> {
    const purchases = await prisma.purchase.findMany({
      include: {
        products: true
      }
    })

    return res.status(200).json(purchases)
  }
}
