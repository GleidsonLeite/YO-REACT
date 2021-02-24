export interface IInternationalMoneyTransfer {
  id: string;
  bank_name: string;
  bank_code: string;
  bank_account_holder: string;
  bank_account_number: string;
  deposit_value: string;
  created_at: Date;
  updated_at: Date;
}
