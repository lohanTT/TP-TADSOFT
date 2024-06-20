import { Request, Response } from "express";
import { isPartialUsuario, isUsuario } from "../../entities/usuario";
import repository from "../../repositories/usuario.repository"

async function getUsuario(req: Request, res: Response) {
    console.log(req.params)
    const id = Number(req.params.id)
    if (id) {
        try {
            return res.status(200).send(await repository.findUsuarioById(id))
        } catch (error) {
            return res.status(500).send({
                error: `${error}`
            })            
        }
    } else {
        try {
            return res.status(200).send(await repository.findAllUsuario())
        } catch (error) {
            return res.status(500).send({
                error: `${error}`
            })            
        }
    }
}

async function createUsuario(req: Request, res: Response) {
    const usuario = req.body
    if (!isUsuario(usuario)){
        return res.status(400).send({
            error: 'Body da requisição deve ser do tipo Usuario, contendo os campos: nome, e-mail, senha, periodicidade'
        })
    }

    try {
        res.status(200).send(await repository.createUsuario(usuario))
    } catch (error){
        return res.status(500).send({
            error: `${error}`
        })
    }
}

async function updateUsuario(req: Request, res: Response) {
    const id = Number(req.params.id)
    const usuario = req.body
    if (!id || !isPartialUsuario(usuario)){
        return res.status(400).send({
            error: 'Parâmetro "id" é obrigatório. Body da requisição deve ser do tipo Usuario parcial, contendo pelo menos um dos campos: nome, e-mail, senha, periodicidade'
        })
    }

    try {
        return res.status(200).send(await repository.updateUsuario(id, usuario))
    } catch (error) {
        return res.status(500).send({
            error: `${error}`
        })
    }
    
}

async function deleteUsuario(req: Request, res: Response) {
    const id = Number(req.params.id)
    if(!id){
        return res.status(400).send({
            error: 'Parâmetro "id" é obrigatório.'
        })
    }

    try {
        res.status(200).send(await repository.deleteUsuario(id))
    } catch (error) {
        return res.status(500).send({
            error: `${error}`
        })
    }    
}



export default {getUsuario, createUsuario, deleteUsuario, updateUsuario}