import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../hooks/Toast';
import api from '../../../../../../../../services/api';
import getValidationErrors from '../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../Components/Button';
import { useCarousel } from '../../../../../../Components/Carousel/Hooks';
import Input from '../../../../../../Components/Input';
import { useWithdrawForm } from '../../Hooks/WithdrawForm';
import { Container, Content, TextContent, FormContainer } from '../BS2/style';
import DonePage from '../DonePage';

interface AuthConfirmationData {
  password: string;
}

const AuthConfirmation: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { withdrawFormData, withdrawOption } = useWithdrawForm();
  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();

  const requestWithdraw = useCallback(
    async (data: AuthConfirmationData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
      };
      const formData = {
        password: data.password,
        withdraw_option: withdrawOption,
        withdraw_data: withdrawFormData,
        value: withdrawFormData.value,
      };
      console.log(formData);
      const response = await api.post('/withdraws', formData, config);
      console.log(response);
      setSlideValue(slideValue + 1);
      setCurrentComponent(<DonePage />);
    },
    [
      setCurrentComponent,
      setSlideValue,
      slideValue,
      withdrawFormData,
      withdrawOption,
    ],
  );

  const onSubmit = useCallback(
    async (data: AuthConfirmationData) => {
      try {
        const schema = Yup.object().shape({
          password: Yup.string().required(),
        });
        await schema.validate(data, { abortEarly: false });
        await requestWithdraw(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          addToast({
            title: 'Erro',
            type: 'error',
            description: 'Preencha os dados corretamente',
          });
          return;
        }
      }
    },
    [addToast, setCurrentComponent, setSlideValue, slideValue],
  );

  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Insira sua senha</h1>
        </TextContent>
        <FormContainer ref={formRef} onSubmit={onSubmit}>
          <Input label="insira sua senha" name="password" type="password" />
          <Button type="submit">Confirmar senha</Button>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default AuthConfirmation;
