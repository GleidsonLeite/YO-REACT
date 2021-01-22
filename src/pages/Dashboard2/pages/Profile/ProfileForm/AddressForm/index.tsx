import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { useAuth } from '../../../../../../hooks/Auth';
import { useToast } from '../../../../../../hooks/Toast';
import api from '../../../../../../services/api';
import getValidationErrors from '../../../../../../utils/getValidationErrors';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';

import { Container, Form } from './style';

interface AddressFormData {
  zipcode: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
}

const AddressForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [address, setAddress] = useState<AddressFormData>(
    {} as AddressFormData,
  );

  const { user } = useAuth();
  const { addToast } = useToast();

  const changeAddressInformation = useCallback(
    async (data: AddressFormData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
        },
      };

      const response = await api.put(
        `/addresses/${user.address_id}`,
        data,
        config,
      );
      setAddress(response.data);
    },
    [user.address_id],
  );

  const handleOnSubmit = useCallback(
    async (data: AddressFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          zipcode: Yup.string(),
          street: Yup.string(),
          neighborhood: Yup.string(),
          number: Yup.string(),
          complement: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await changeAddressInformation({
          zipcode: data.zipcode,
          number: data.number,
          street: data.street,
          neighborhood: data.neighborhood,
          complement: data.complement,
        });

        addToast({
          type: 'success',
          title: 'Concluído',
          description: 'Alterações Realizadas com sucesso',
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
        if (!!error.isAxiosError && !error.response) {
          addToast({
            type: 'error',
            title: 'Erro no cadastro',
            description:
              'Houve um problema ao tentar conectar com a API. Por favor, tente novamente!',
          });
          return;
        }
        const { message } = error.response.data;
        addToast({
          type: 'error',
          title: 'Erro ao realizar atualização das informações',
          description: message,
        });
      }
    },
    [addToast, changeAddressInformation],
  );

  const getAddressInformation = useCallback(async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
      },
    };

    const response = await api.get(`/addresses/${user.address_id}`, config);
    setAddress(response.data);
  }, [user.address_id]);

  useEffect(() => {
    getAddressInformation();
  }, [getAddressInformation]);

  useEffect(() => {
    formRef.current?.setData(address);
  }, [address]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleOnSubmit}>
        <Input
          label="CEP"
          name="zipcode"
          placeholder="Insira o CEP da sua rua"
          type="text"
        />
        <Input
          label="Rua"
          name="street"
          placeholder="Insira o nome da sua rua"
          type="text"
        />
        <Input
          label="Bairro"
          name="neighborhood"
          placeholder="Insira o nome do seu bairro"
          type="text"
        />
        <Input
          label="Numero da casa"
          name="number"
          placeholder="Insira o numero da sua residência"
          type="number"
        />
        <Input
          label="Complemento"
          name="complement"
          placeholder="Insira um complemento"
          type="text"
        />

        <Button type="submit">Salvar Endereço</Button>
      </Form>
    </Container>
  );
};

export default AddressForm;
