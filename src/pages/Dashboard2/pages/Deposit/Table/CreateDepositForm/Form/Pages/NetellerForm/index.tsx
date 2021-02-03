import { FormHandles } from '@unform/core';
import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../../hooks/Toast';
import api from '../../../../../../../../../services/api';
import getValidationErrors from '../../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../../Components/Button';
import Input from '../../../../../../../Components/Input';
import { useSlide } from '../../../Components/Slide/hooks/Slide';
import { NetellerFormData, useDepositForm } from '../../hooks/DepositForm';

import { Container, Content } from './style';

const NetellerForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { setCurrentPageNumber } = useSlide();
  const { setDepositForm } = useDepositForm();
  const { addToast } = useToast();

  const [minimumInvestmentValue, setMinimumInvestmentValue] = useState<number>(
    1000,
  );

  const getMinimumInvestmentValue = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
      },
    };
    const response = await api.get(
      '/investments/minimumInvestmentValue',
      config,
    );
    const { value } = response.data;
    setMinimumInvestmentValue(value);
  }, []);

  const handleOnSubmit = useCallback(
    async (data: NetellerFormData) => {
      try {
        await getMinimumInvestmentValue();
        const schema = Yup.object().shape({
          account: Yup.string().required(),
          value: Yup.number().required().min(minimumInvestmentValue),
        });

        await schema.validate(data, { abortEarly: false });
        setDepositForm({
          account: data.account,
          value: data.value,
        });
        setCurrentPageNumber(3);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          addToast({
            type: 'error',
            title: 'Erro',
            description:
              'Por favor, preencha os dados do depósito corretamente',
          });
          return;
        }

        const { message } = error.response.data;
        addToast({
          type: 'error',
          title: 'Erro no depósito',
          description: message,
        });
      }
    },
    [
      addToast,
      getMinimumInvestmentValue,
      minimumInvestmentValue,
      setCurrentPageNumber,
      setDepositForm,
    ],
  );

  return (
    <Container>
      <h1>Neteller</h1>
      <Content onSubmit={handleOnSubmit}>
        <Input label="Conta Neteller" name="account" />
        <Input label="Valor a ser Depositado" name="value" />
        <Button type="submit">Depositar</Button>
      </Content>
    </Container>
  );
};

export default NetellerForm;
