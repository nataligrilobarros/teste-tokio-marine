import { EmpresaModel } from "./empresa.model";
import { EnderecoModel } from "./endereco.model";

export class UsuarioModel{
        id: number;
        name: string;
        username: string;
        email: string;
        address:  EnderecoModel;
        phone: string;
        website: string;
        company:EmpresaModel;
}