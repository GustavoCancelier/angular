import {EnumFilial} from "../enums/filial.enum";

export interface Funcionario { 
    id?: number,
    nome: string, 
    filial: EnumFilial,
    dataAdmissao: Date,
    cargo : string,
    salario : number,
    estaFerias? : boolean,
}
