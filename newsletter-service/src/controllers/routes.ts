import { Router } from "express";
import UsuarioRouter from "./usuario/router";

const router = Router()

router.use('/usuario', UsuarioRouter)
export default router
