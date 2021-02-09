import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../../hooks/Toast';
import api from '../../../../../../../../../services/api';
import getValidationErrors from '../../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../../Components/Button';
import Input from '../../../../../../../Components/Input';
import { Investment } from '../../../../DataContent';
import { useSlide } from '../../../Components/Slide/hooks/Slide';
import { useDepositForm } from '../../hooks/DepositForm';

import { Container, Content } from './style';

interface AuthConfirmationData {
  password: string;
}

interface AuthConfirmationProps {
  setDeposit(deposit: Investment): void;
}

const AuthConfirmation: React.FC<AuthConfirmationProps> = ({ setDeposit }) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { depositForm, depositOption } = useDepositForm();
  const { setCurrentPageNumber } = useSlide();

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
      console.log(formData);
      const response = await api.post('/investments/', formData, config);
      setDeposit(response.data);
      setCurrentPageNumber(4);
    },
    [depositForm, depositOption, setCurrentPageNumber, setDeposit],
  );

  const handleOnSubmit = useCallback(
    async (data: AuthConfirmationData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().min(8, 'No mínimo 8 dígitos'),
        });
        await schema.validate(data, { abortEarly: false });
        await requestDeposit(data);
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
    [addToast, requestDeposit],
  );

  return (
    <Container>
      <h1>Confirme seus dados</h1>

      <Content onSubmit={handleOnSubmit} ref={formRef}>
        <Input type="password" label="Confirmar Senha" name="password" />
        <Button type="submit">Realizar Depósito</Button>
      </Content>
    </Container>
  );
};

export default AuthConfirmation;
