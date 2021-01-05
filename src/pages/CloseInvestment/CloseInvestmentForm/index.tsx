import React, { useCallback, useState } from 'react';
import Input from '../FeeInput';
import Button from '../CloseInvestmentButton';
import { Container, Content, FormContent } from './styles';
import api from '../../../services/api';
import { useToast } from '../../../hooks/Toast';

const CloseInvestmentForm: React.FC = () => {
  const [feeValue, setFeeValue] = useState('');

  const { addToast } = useToast();

  const handleFeeValueInputOnChange = useCallback((event) => {
    const percentageValue = String(event.target.value);
    percentageValue.length < 2 && setFeeValue(percentageValue);
  }, []);

  const handleCloseInvestmentButtonOnClick = useCallback(async () => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('@YO:token')}` },
    };

    const data = { fee: feeValue };

    const { fee } = (
      await api.put('investments/closeInvestmentCycle', data, config)
    ).data;
    addToast({
      type: 'success',
      title: 'Ciclo Fechado',
      description: `Parabéns, fechamos um ciclo com um redimento de ${fee}%`,
    });
  }, [addToast, feeValue]);

  return (
    <Container>
      <Content>
        <FormContent>
          <Input value={feeValue} onChange={handleFeeValueInputOnChange} />
          <Button onClick={handleCloseInvestmentButtonOnClick} />
        </FormContent>
      </Content>
    </Container>
  );
};

export default CloseInvestmentForm;
