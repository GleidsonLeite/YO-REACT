import { IUser } from './IUser';

export interface IInterestFee {
  id: string;
  creator_id: string;
  creator: IUser;
  fee: number;
  created_at: Date;
  updated_at: Date;
}
