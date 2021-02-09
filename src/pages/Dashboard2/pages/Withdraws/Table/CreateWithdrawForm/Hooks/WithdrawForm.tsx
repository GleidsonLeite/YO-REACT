import React, { createContext, useContext, useState } from 'react';

export interface NetellerFormData {
  account: string;
  value: number;
}

export interface BankSlipFormData {
  value: number;
}

interface WithdrawFormProps {
  withdrawOption: number;
  setWithdrawOption(withdawOption: number): void;
  withdrawFormData: NetellerFormData | BankSlipFormData;
  setWithdrawFormData(
    withdrawFormData: NetellerFormData | BankSlipFormData,
  ): void;
}

const WithdrawFormContext = createContext<WithdrawFormProps>(
  {} as WithdrawFormProps,
);

const WithdrawFormProvider: React.FC = ({ children }) => {
  const [withdrawOption, setWithdrawOption] = useState<number>(0);
  const [withdrawFormData, setWithdrawFormData] = useState<
    NetellerFormData | BankSlipFormData
  >({} as NetellerFormData);
  return (
    <WithdrawFormContext.Provider
      value={{
        withdrawFormData,
        setWithdrawFormData,
        withdrawOption,
        setWithdrawOption,
      }}
    >
      {children}
    </WithdrawFormContext.Provider>
  );
};

function useWithdrawForm(): WithdrawFormProps {
  const context = useContext(WithdrawFormContext);
  if (!context) {
    throw new Error(
      'useWithdrawForm must be used within a WithdrawFormProvider',
    );
  }
  return context;
}

export { WithdrawFormProvider, useWithdrawForm };
