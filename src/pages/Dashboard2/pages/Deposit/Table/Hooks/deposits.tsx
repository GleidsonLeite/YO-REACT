import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IInvestment } from '../../../../../../DTOs/IInvestment';
import api from '../../../../../../services/api';

export interface DepositData {
  deposits: IInvestment[];
  setDeposits(deposits: IInvestment[]): void;
  wasDepositsLoaded: boolean;
  setWasDepositsLoaded(wasDepositsLoaded: boolean): void;
}

const DepositDataContext = createContext<DepositData>({} as DepositData);

const DepositDataProvider: React.FC = ({ children }) => {
  const [deposits, setDeposits] = useState([] as IInvestment[]);
  const [wasDepositsLoaded, setWasDepositsLoaded] = useState<boolean>(false);

  const getDepositsFromApi = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
      },
    };
    const response = await api.get('/investments/list', config);
    setDeposits(response.data);
    setWasDepositsLoaded(true);
  }, []);

  useEffect(() => {
    getDepositsFromApi();
  }, [getDepositsFromApi]);
  return (
    <DepositDataContext.Provider
      value={{
        deposits,
        setDeposits,
        wasDepositsLoaded,
        setWasDepositsLoaded,
      }}
    >
      {children}
    </DepositDataContext.Provider>
  );
};

function useDepositData(): DepositData {
  const context = useContext(DepositDataContext);
  if (!context) {
    throw new Error('useDepositData must be used within a DepositFormProvider');
  }
  return context;
}

export { DepositDataProvider, useDepositData };
