import { useLoading } from '@agney/react-loading';
import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../../hooks/Toast';
import api from '../../../../../../../../../services/api';
import getValidationErrors from '../../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../../Components/Button';
import { useCarousel } from '../../../../../../../Components/Carousel/Hooks';
import Input from '../../../../../../../Components/Input';
import { NetellerFormData, useDepositForm } from '../../hooks/DepositForm';
import AuthConfirmation from '../AuthConfirmation';

import { Container, Content, TextContent, FormContainer } from './style';

const NetellerForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [minimumInvestmentValue, setMinimumInvestmentValue] = useState<number>(
    1000,
  );
  const [
    isMinimumInvestimentValueLoaded,
    setIsMinimumInvestimentValueLoaded,
  ] = useState<boolean>(false);

  const { indicatorEl } = useLoading({
    loading: isMinimumInvestimentValueLoaded,
    loaderProps: {
      valueText: 'Carregando os dados do backend',
    },
  });
  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();
  const { setDepositForm } = useDepositForm();
  const { addToast } = useToast();

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
    setIsMinimumInvestimentValueLoaded(true);
  }, []);

  const handleOnSubmit = useCallback(
    async (data: NetellerFormData) => {
      try {
        const schema = Yup.object().shape({
          account: Yup.string().required(),
          value: Yup.number().required().min(minimumInvestmentValue),
        });

        await schema.validate(data, { abortEarly: false });
        setDepositForm({
          account: data.account,
          value: data.value,
        });
        setCurrentComponent(<AuthConfirmation />);
        setSlideValue(slideValue + 1);
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
      minimumInvestmentValue,
      setCurrentComponent,
      setDepositForm,
      setSlideValue,
      slideValue,
    ],
  );

  useEffect(() => {
    getMinimumInvestmentValue();
  }, [getMinimumInvestmentValue]);

  return (
    <Container>
      <Content>
        <TextContent>
          <h1>Neteller</h1>
        </TextContent>
        <FormContainer onSubmit={handleOnSubmit}>
          {isMinimumInvestimentValueLoaded && (
            <>
              <Input label="Conta Neteller" name="account" />
              <Input label="Valor a ser Depositado" name="value" />
              <Button type="submit">Depositar</Button>
            </>
          )}
          {!isMinimumInvestimentValueLoaded && indicatorEl}
        </FormContainer>
      </Content>
    </Container>
  );
};

export default NetellerForm;
