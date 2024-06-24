import { Router } from "express";
import controller from "../controllers/usuario.controller";

const router = Router();


/**
 * @swagger
 * /usuario:
 *   get:
 *     summary: Retorna uma lista de usuários ou um usuário específico pelo ID.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: false
 *         description: ID do usuário para buscar um usuário específico.
 *     responses:
 *       200:
 *         description: Sucesso. Retorna uma lista de usuários ou um usuário específico.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do usuário.
 *                 nome:
 *                   type: string
 *                   description: Nome do usuário.
 *                 email:
 *                   type: string
 *                   description: E-mail do usuário.
 *                 senha:
 *                   type: string
 *                   description: Senha do usuário.
 *                 periodicidade:
 *                   type: string
 *                   enum: [semanal, quinzenal, mensal, semestral]
 *                   description: Periodicidade do usuário.
 *       400:
 *         description: Erro. Parâmetro ID não enviado corretamente.
 */
router.get('/', controller.getUsuario)

/**
 * @swagger
 * /usuario:
 *   post:
 *     summary: Cria um novo usuário.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: 'joao.silva@example.com'
 *               senha:
 *                 type: string
 *                 example: senha123
 *               periodicidade:
 *                 type: string
 *                 enum: [semanal, quinzenal, mensal, semestral]
 *                 example: mensal
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso. Retorna o usuário cadastrado sem a senha.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do usuário.
 *                 nome:
 *                   type: string
 *                   description: Nome do usuário.
 *                 email:
 *                   type: string
 *                   description: E-mail do usuário.
 *                 periodicidade:
 *                   type: string
 *                   enum: [semanal, quinzenal, mensal, semestral]
 *                   description: Periodicidade do usuário.
 *       400:
 *         description: Erro. Corpo da requisição não enviado corretamente.
 */
router.post('/', controller.createUsuario)

/**
 * @swagger
 * /usuario:
 *   put:
 *     summary: Atualiza parcialmente um usuário pelo ID.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao.silva@example.com
 *               periodicidade:
 *                 type: string
 *                 enum: [semanal, quinzenal, mensal, semestral]
 *                 example: mensal
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso. Retorna o usuário atualizado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do usuário.
 *                 nome:
 *                   type: string
 *                   description: Nome do usuário.
 *                 email:
 *                   type: string
 *                   description: E-mail do usuário.
 *                 periodicidade:
 *                   type: string
 *                   enum: [semanal, quinzenal, mensal, semestral]
 *                   description: Periodicidade do usuário.
 *       400:
 *         description: Erro. Parâmetros inválidos na requisição.
 *       404:
 *         description: Erro. Usuário não encontrado com o ID fornecido.
 */
router.put('/', controller.updateUsuario)

/**
 * @swagger
 * /usuario:
 *   delete:
 *     summary: Deleta um usuário pelo ID.
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário a ser deletado.
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso.
 *       404:
 *         description: Erro. Usuário não encontrado com o ID fornecido.
 */
router.delete('/', controller.deleteUsuario)

export default router
