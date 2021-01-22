import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { useAuth } from '../../../../../../hooks/Auth';
import { useToast } from '../../../../../../hooks/Toast';
import api from '../../../../../../services/api';
import getValidationErrors from '../../../../../../utils/getValidationErrors';
import Button from '../../../../Components/Button';
import FileInput from '../../../../Components/FileInput';

import { Container, Form } from './style';

interface IdentityFormData {
  frontDocument: File;
  backDocument: File;
  selfieDocument: File;
}

const IdentityForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();

  const uploadIdentityFiles = useCallback(
    async (data: IdentityFormData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          responseType: 'blob',
        },
      };

      const formData = new FormData();
      formData.append('frontDocument', data.frontDocument);
      formData.append('backDocument', data.backDocument);
      formData.append('selfieDocument', data.selfieDocument);
      // formData.append('investment_id', event.target.id);

      const response = await api.patch('/users/identity', formData, config);
      updateUser(response.data);
    },
    [updateUser],
  );

  const handleOnSubmit = useCallback(
    async (data: IdentityFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          frontDocument: Yup.mixed().required(
            'É necessário enviar uma imagem da frente do documento de identificação',
          ),
          backDocument: Yup.mixed().required(
            'É necessário enviar uma imagem do verso do documento de identificação',
          ),
          selfieDocument: Yup.mixed().required(
            'É necessário enviar uma selfie com o documento de identificação ',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await uploadIdentityFiles({
          frontDocument: data.frontDocument,
          backDocument: data.backDocument,
          selfieDocument: data.selfieDocument,
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
            description:
              'Por favor, envie todas as imagens necessárias para completar o seu cadastro',
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
    [addToast, uploadIdentityFiles],
  );

  useEffect(() => {
    formRef.current?.setData({
      frontDocument: user.frontIdentityFile,
      backDocument: user.backIdentityFile,
      selfieDocument: user.selfieIdentityFile,
    });
  }, [user.backIdentityFile, user.frontIdentityFile, user.selfieIdentityFile]);

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleOnSubmit}>
        <FileInput label="Foto da frente documento" name="frontDocument" />
        <FileInput label="Foto do verso do documento" name="backDocument" />
        <FileInput label="Selfie com o documento" name="selfieDocument" />

        <Button type="submit">Salvar Documentos</Button>
      </Form>
    </Container>
  );
};

export default IdentityForm;
