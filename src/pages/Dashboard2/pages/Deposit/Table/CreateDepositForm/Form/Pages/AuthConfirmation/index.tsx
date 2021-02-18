import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../../hooks/Toast';
import api from '../../../../../../../../../services/api';
import getValidationErrors from '../../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../../Components/Button';
import { useCarousel } from '../../../../../../../Components/Carousel/Hooks';
import Input from '../../../../../../../Components/Input';
import { useDepositData } from '../../../../Hooks/deposits';
import { useDepositForm } from '../../hooks/DepositForm';
import AttachDocument from '../AttachDocument';

import {
  Container,
  Content,
  TextContent,
  InvestmentDataContainer,
  FormContainer,
} from '../NetellerForm/style';

interface AuthConfirmationData {
  password: string;
}

const AuthConfirmation: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { depositForm, depositOption } = useDepositForm();
  const { setDeposits, deposits } = useDepositData();

  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();

  const requestDeposit = useCallback(
    async (data: AuthConfirmationData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
      };
      const formData = {
        password: data.password,
        depositOption,
        depositFormData: depositForm,
        value: depositForm.value,
      };
      const response = await api.post('/investments/', formData, config);
      return response.data;
    },
    [depositForm, depositOption],
  );

  const handleOnSubmit = useCallback(
    async (data: AuthConfirmationData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().min(8, 'No mínimo 8 dígitos'),
        });
        await schema.validate(data, { abortEarly: false });
        const deposit = await requestDeposit(data);
        setDeposits([...deposits, deposit]);
        setCurrentComponent(<AttachDocument deposit={deposit} />);
        setSlideValue(slideValue + 1);
        addToast({
          type: 'success',
          title: 'Depósito',
          description: 'O depósito foi solicitado com sucesso',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          addToast({
            type: 'error',
            title: 'Erro',
            description: 'Por favor, preencha os seus dados corretamente',
          });
          return;
        }

        const { message } = error.response.data;
        addToast({
          type: 'error',
          title: 'Erro na verificação',
          description: message,
        });
      }
    },
    [
      addToast,
      deposits,
      requestDeposit,
      setCurrentComponent,
      setDeposits,
      setSlideValue,
      slideValue,
    ],
  );

  const depositOptions = [
    'Neteller',
    'Boleto Bancário',
    'Transferência Internacional',
  ];
  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Confirme seus dados</h1>
          <InvestmentDataContainer>
            <h2>Dados do depósito</h2>
            <h3>{`Tipo: ${depositOptions[depositOption]}`}</h3>
            <h3>{`Valor: $ ${depositForm.value}`}</h3>
            {depositOption === 0 && (
              <h3>{`Conta Neteller: ${depositForm.account}`}</h3>
            )}
          </InvestmentDataContainer>
        </TextContent>

        <FormContainer onSubmit={handleOnSubmit} ref={formRef}>
          <Input type="password" label="Confirmar Senha" name="password" />
          <Button type="submit">Realizar Depósito</Button>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default AuthConfirmation;
