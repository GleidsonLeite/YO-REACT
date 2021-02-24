import { IRole } from './IRole';

export interface IUser {
  id: string;
  name: string;
  phone: string;
  resume: string;
  frontIdentityFile: string;
  selfieIdentityFile: string;
  backIdentityFile: string;
  cpf: string;
  email: string;
  password: string;
  activated: boolean;
  amount: string;
  avatar: string;
  role_id: string;
  role: IRole;
  address_id: string;
  userLocation: string;
  created_at: Date;
  updated_at: Date;
}
