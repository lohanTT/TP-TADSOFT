import { Periodicidade } from "../types/periodicidade";

export interface Usuario {
    id?: bigint;
    nome: string;
    email: string;
    senha: string;
    periodicidade: Periodicidade
}

export function isUsuario(object: unknown): object is Usuario {
    if (object !== null && typeof object === "object")
        if (['nome', 'senha', 'periodicidade'].every((atributo) => Object.keys(object).includes(atributo)))
            return true    
    return false
}

export function isPartialUsuario(object: unknown): object is Partial<Usuario> {
    if (object !== null && typeof object === "object")
        if (Object.keys(object).every((key) => ['nome', 'senha', 'periodicidade'].includes(key)))
            return true
    return false
}