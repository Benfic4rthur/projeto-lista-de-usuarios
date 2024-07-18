import { IStatus } from './status.interface';
import { IAddress } from './adress.interface';

export interface IUser {
  nome: string;
  email: string;
  senha: string;
  idade: number;
  endereco: IAddress;
  telefone: string;
  ativo: boolean | null;
  funcao: string;
  dataCadastro: string;
  status: IStatus;
}
