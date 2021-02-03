import React, { createContext, useContext, useState } from 'react';

// TODO: Create the context DATA
export interface NetellerFormData {
  account: string;
  value: number;
}

export interface BankSlipFormData {
  value: number;
}

export interface DepositFormData {
  depositOption: number;
  setDepositOption(depositOption: number): void;
  depositForm: NetellerFormData | BankSlipFormData;
  setDepositForm(depositFrom: NetellerFormData | BankSlipFormData): void;
}

const DepositFormContext = createContext<DepositFormData>(
  {} as DepositFormData,
);

const DepositFormProvider: React.FC = ({ children }) => {
  const [depositOption, setDepositOption] = useState<number>(0);
  const [depositForm, setDepositForm] = useState<
    NetellerFormData | BankSlipFormData
  >({} as NetellerFormData);
  return (
    <DepositFormContext.Provider
      value={{
        depositOption,
        setDepositOption,
        depositForm,
        setDepositForm,
      }}
    >
      {children}
    </DepositFormContext.Provider>
  );
};

function useDepositForm(): DepositFormData {
  const context = useContext(DepositFormContext);
  if (!context) {
    throw new Error('useDepositForm must be used within a DepositFormProvider');
  }
  return context;
}

export { DepositFormProvider, useDepositForm };
