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
import { useDepositForm } from '../../hooks/DepositForm';
import AuthConfirmation from '../AuthConfirmation';

import {
  Container,
  Content,
  TextContent,
  FormContainer,
} from '../NetellerForm/style';

interface BankSlipFormData {
  depositValue: number;
}

const BankSlipForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { setDepositForm } = useDepositForm();
  const { addToast } = useToast();

  const { setCurrentComponent, setSlideValue, slideValue } = useCarousel();

  const [minimumInvestmentValue, setMinimumInvestmentValue] = useState<number>(
    1000,
  );
  const [
    wasMinimumInvestimentValueLoaded,
    setWasMinimumInvestimentValueLoaded,
  ] = useState<boolean>(false);

  const { indicatorEl } = useLoading({
    loading: wasMinimumInvestimentValueLoaded,
    loaderProps: {
      valueText: 'Carregando os dados do backend',
    },
  });

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
    setWasMinimumInvestimentValueLoaded(true);
  }, []);

  const handleOnSubmit = useCallback(
    async (data: BankSlipFormData) => {
      try {
        await getMinimumInvestmentValue();
        const schema = Yup.object().shape({
          depositValue: Yup.number().required().min(minimumInvestmentValue),
        });

        await schema.validate(data, { abortEarly: false });
        setDepositForm({
          value: data.depositValue,
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
      getMinimumInvestmentValue,
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
          <h1>Boleto Bancário</h1>
        </TextContent>

        <FormContainer onSubmit={handleOnSubmit}>
          {wasMinimumInvestimentValueLoaded ? (
            <>
              <Input label="Valor a ser depositado" name="depositValue" />
              <Button type="submit">Depositar</Button>
            </>
          ) : (
            indicatorEl
          )}
        </FormContainer>
      </Content>
    </Container>
  );
};

export default BankSlipForm;
