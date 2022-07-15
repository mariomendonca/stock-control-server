import express from 'express'
import { router } from './routes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(router)
app.use(cors({
  origin: '*'
}))

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`🍫 Server running on ${PORT} 🍫`))