import { Router } from "express";
import controller from "./controller";

const router = Router();

router.get('/', controller.getUsuario)
router.post('/', controller.createUsuario)
router.put('/:id', controller.updateUsuario)
router.delete('/:id', controller.deleteUsuario)

export default router
