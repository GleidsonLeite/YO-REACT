import { INetellerWithdraw } from './INetellerWithdraw';
import { IUser } from './IUser';
import { IBS2Withdraw } from './IBS2Withdraw';

export interface IWithdraw {
  id: string;
  investor_id: string;
  investor: IUser;
  withdraw_option: number;
  neteller_withdraw_id: string;
  neteller: INetellerWithdraw;
  bs2_withdraw_id: string;
  bs2: IBS2Withdraw;
  value: string;
  confirmed: boolean;
  confirming_user_id: string;
  confirmingUser: IUser;
  data_confirmed: Date;
  created_at: Date;
  updated_at: Date;
}
