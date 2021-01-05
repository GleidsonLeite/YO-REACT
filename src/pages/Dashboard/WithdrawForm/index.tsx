import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { MdAttachMoney } from 'react-icons/md';

import { useToast } from '../../../hooks/Toast';
import { Container, Content, FormInvest } from '../InvestmentForm/styles';
import InputNumber from '../InvestmentForm/InputNumber';
import Button from '../../../components/Button';
import api from '../../../services/api';
import getValidationErrors from '../../../utils/getValidationErrors';
import { WithdrawData } from '../index';

interface WithdrawFormData {
  value: number;
}

interface WithdrawFormProps {
  withdraws: WithdrawData[];
  setWithdraws(widthdraws: WithdrawData[]): void;
}

const WithdrawForm: React.FC<WithdrawFormProps> = ({
  withdraws,
  setWithdraws,
}) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: WithdrawFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          value: Yup.number()
            .min(100, 'Insira um valor acima de $100.00')
            .required('O valor do saque é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          },
        };

        const response = await api.post('/withdraws/', data, config);

        const withdraw = response.data as WithdrawData;

        setWithdraws([...withdraws, withdraw]);

        addToast({
          type: 'success',
          title: 'Saque',
          description:
            'Você acabou de realizar uma solicitação de saque! A nossa equipe irá conferir os dados do saque para validá-lo.',
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
              'Para realizar o saque, é necessário um valor mínimo de $100,00',
          });
          return;
        }
        if (!!error.isAxiosError && !error.response) {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description:
              'Houve um problema ao tentar conectar com a API, por favor preencha os seus dados e tente novamente',
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
    [addToast, setWithdraws, withdraws],
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

          <Button type="submit">Sacar</Button>
        </FormInvest>
      </Content>
    </Container>
  );
};

export default WithdrawForm;
