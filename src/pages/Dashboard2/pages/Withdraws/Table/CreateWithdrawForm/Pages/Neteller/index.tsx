import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../hooks/Toast';
import getValidationErrors from '../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../Components/Button';
import { useCarousel } from '../../../../../../Components/Carousel/Hooks';
import Input from '../../../../../../Components/Input';
import { NetellerFormData, useWithdrawForm } from '../../Hooks/WithdrawForm';
import AuthConfirmation from '../AuthConfirmation';
import { Container, Content, FormContainer, TextContent } from '../BS2/style';

const Neteller: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { setWithdrawFormData } = useWithdrawForm();
  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();
  const onSubmit = useCallback(
    async (data: NetellerFormData) => {
      try {
        const schema = Yup.object().shape({
          account: Yup.string().required(),
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
        <TextContent>Neteller</TextContent>
        <FormContainer ref={formRef} onSubmit={onSubmit}>
          <Input label="Conta Neteller" name="account" />
          <Input label="Valor a ser sacado" name="value" />
          <Button type="submit">Solicitar Saque</Button>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Neteller;
