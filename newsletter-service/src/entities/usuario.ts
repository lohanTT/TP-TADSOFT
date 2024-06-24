import { Periodicidade } from "../types/periodicidade";

export interface Usuario {
    id?: number;
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

export function isPartialUsuario(object: any): object is Partial<Usuario> {
    if (typeof object !== 'object' || object === null) {
        return false;
    }

    const allowedKeys = ['id', 'nome', 'email', 'senha', 'periodicidade'];
    const periodicidadeValues = ['semanal', 'quinzenal', 'mensal', 'semestral'];

    for (const key in object) {
        if (!allowedKeys.includes(key)) {
            return false;
        }

        switch (key) {
            case 'id':
                if (object.id !== undefined && typeof object.id !== 'number') {
                    return false;
                }
                break;
            case 'nome':
                if (object.nome !== undefined && typeof object.nome !== 'string') {
                    return false;
                }
                break;
            case 'email':
                if (object.email !== undefined && typeof object.email !== 'string') {
                    return false;
                }
                break;
            case 'senha':
                if (object.senha !== undefined && typeof object.senha !== 'string') {
                    return false;
                }
                break;
            case 'periodicidade':
                if (object.periodicidade !== undefined && !periodicidadeValues.includes(object.periodicidade)) {
                    return false;
                }
                break;
            default:
                return false;
        }
    }

    return true;
}

