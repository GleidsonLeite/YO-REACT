import { IBankSlipDeposit } from './IBankSlipDeposit';
import { IInterestFee } from './IInterestFee';
import { IInternationalMoneyTransfer } from './IInternationalMoneyTransfer';
import { INetellerDeposit } from './INetellerDeposit';
import { IUser } from './IUser';
import { IWithdraw } from './IWithdraw';

export interface IInvestment {
  id: string;
  investor_id: string;
  investor: IUser;
  value: string;
  currency: string;
  deposit_slip: string;
  bank_slip: string;
  confirmed: boolean;
  confirming_user_id: string;
  confirmingUser: IUser;
  interest_fee_id: string;
  interestFee: IInterestFee;
  data_confirmed: Date;
  deposit_option: number;
  neteller_id: string;
  netellerDeposit: INetellerDeposit;
  bankslip_deposit_id: string;
  bankSlipDeposit: IBankSlipDeposit;
  international_money_transfer_id: string;
  internationalMoneyTransfer: IInternationalMoneyTransfer;
  withdraw_subtracted_id: string;
  withdraws: IWithdraw[];
  created_at: Date;
  updated_at: Date;
}
