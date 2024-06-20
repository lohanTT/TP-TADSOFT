import { Usuario } from "../entities/usuario";
import db from "../prisma";

async function findUsuarioById(id: number){
    try {
        return await db.usuario.findUnique({where: {id}})
    } catch (error) {
        throw error
    }
}

async function findAllUsuario(){
    try {
        return await db.usuario.findMany()
    } catch (error) {
        throw error
    }
}

async function createUsuario(usuario: Usuario){
    try {
        return await db.usuario.create({data: usuario})
    } catch (error) {
        throw error
    }
}

async function updateUsuario(id: number, usuario: Partial<Usuario>){
    try{
        return await db.usuario.update({ data: usuario, where: {id}})
    } catch (error) {
        throw error
    }
}

async function deleteUsuario(id: number){
    try {
        return await db.usuario.delete({where: {id}})
    } catch (error) {
        throw error
    }
}

export default {
    findUsuarioById, 
    findAllUsuario, 
    createUsuario, 
    updateUsuario, 
    deleteUsuario
}