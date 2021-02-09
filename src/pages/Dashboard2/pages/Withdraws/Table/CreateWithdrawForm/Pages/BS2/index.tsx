import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../hooks/Toast';
import getValidationErrors from '../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../Components/Button';
import { useCarousel } from '../../../../../../Components/Carousel/Hooks';
import Input from '../../../../../../Components/Input';
import { BankSlipFormData, useWithdrawForm } from '../../Hooks/WithdrawForm';
import AuthConfirmation from '../AuthConfirmation';

import { Container, Content, TextContent, FormContainer } from './style';

const BS2: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { setWithdrawFormData } = useWithdrawForm();
  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();
  const onSubmit = useCallback(
    async (data: BankSlipFormData) => {
      try {
        const schema = Yup.object().shape({
          value: Yup.number().required(),
        });
        await schema.validate(data, { abortEarly: false });
        setWithdrawFormData(data);
        setCurrentComponent(<AuthConfirmation />);
        setSlideValue(slideValue + 1);
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
    [
      addToast,
      setCurrentComponent,
      setSlideValue,
      setWithdrawFormData,
      slideValue,
    ],
  );

  return (
    <Container>
      <Content>
        <TextContent>
          <h1>BS2</h1>
        </TextContent>
        <FormContainer ref={formRef} onSubmit={onSubmit}>
          <Input name="value" label="Valor em dólar" />
          <Button type="submit">Solicitar saque</Button>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default BS2;
