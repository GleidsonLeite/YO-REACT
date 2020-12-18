import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { MdAttachMoney } from 'react-icons/md';

import { useToast } from '../../../hooks/Toast';
import { Container, Content, FormInvest } from './styles';
import InputNumber from './InputNumber';
import Button from '../../../components/Button';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';
import { InvestmentData } from '../index';

interface InvestmentFormData {
  value: number;
  depositSlip: File;
}

interface InvestmentFormProps {
  investments: InvestmentData[];
  setInvestments(investments: InvestmentData[]): void;
}

const InvestmentForm: React.FC<InvestmentFormProps> = ({
  investments,
  setInvestments,
}) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: InvestmentFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          value: Yup.number()
            .min(100, 'Insira um valor acima de $100.00')
            .required('O valor do investimento é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          },
        };

        const response = await api.post('/investments/', data, config);

        const investment = response.data as InvestmentData;

        setInvestments([...investments, investment]);

        addToast({
          type: 'success',
          title: 'Investimento',
          description:
            'Parabéns por realizar um investimento! A nossa equipe irá conferir os dados do investimento validá-lo.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);

          // toast.warn('Por favor, preencha os seus dados corretamente');
          addToast({
            type: 'error',
            title: 'Erro',
            description:
              'Para realizar o investmento, é necessário um valor mínimo de $100,00',
          });
          return;
        }
        if (!!error.isAxiosError && !error.response) {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description:
              'Houve um problema ao tentar conectar com a API, por favor preencha os seus dados novamente',
          });
          return;
        }
        const { message } = error.response.data;
        addToast({
          type: 'error',
          title: 'Houve um erro ao realizar um investimento.',
          description: message,
        });
      }
    },
    [addToast, investments, setInvestments],
  );

  return (
    <Container>
      <Content>
        <FormInvest ref={formRef} onSubmit={handleSubmit}>
          <InputNumber
            type="number"
            name="value"
            icon={MdAttachMoney}
            placeholder="100.00"
          />

          <Button type="submit">Investir</Button>
        </FormInvest>
      </Content>
    </Container>
  );
};

export default InvestmentForm;
