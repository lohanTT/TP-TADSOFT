import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import router from "./controllers/routes";

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log(`Newsletter-service rodando na porta ${PORT}`)
})