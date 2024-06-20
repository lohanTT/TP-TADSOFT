import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import router from "./controllers/routes";

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use(router)

app.get('/', (req: Request, res: Response) => { return res.status(200).send('Hello World')})

app.listen(PORT, () => {
    console.log(`Newsletter-service rodando na porta ${PORT}`)
})