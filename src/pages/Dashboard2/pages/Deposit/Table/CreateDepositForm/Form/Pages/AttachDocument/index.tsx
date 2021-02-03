import { FormHandles } from '@unform/core';
import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useToast } from '../../../../../../../../../hooks/Toast';
import api from '../../../../../../../../../services/api';
import getValidationErrors from '../../../../../../../../../utils/getValidationErrors';
import Button from '../../../../../../../Components/Button';
import FileInput from '../../../../../../../Components/FileInput';
import { Investment } from '../../../../DataContent';

import { Container, Content, Presentation, DepositSlipForm } from './style';

interface AttachDocumentProps {
  deposit: Investment;
}

interface AttachDocumentFormData {
  depositSlipFile: File;
}

const AttachDocument: React.FC<AttachDocumentProps> = ({ deposit }) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const uploadSlipDocument = useCallback(
    async (data: AttachDocumentFormData) => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@YO:token')}`,
          responseType: 'blob',
        },
      };
      const formData = new FormData();
      formData.append('depositSlip', data.depositSlipFile);
      await api.patch('/investments/setDepositSlip', formData, config);
    },
    [],
  );
  const handleOnSubmit = useCallback(
    async (data: AttachDocumentFormData) => {
      try {
        const schema = Yup.object().shape({
          depositSlipFile: Yup.mixed(),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await uploadSlipDocument(data);
        addToast({
          type: 'success',
          title: 'Depósito',
          description:
            'O arquivo de comprovante do depósito foi anexado com sucesso',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          addToast({
            type: 'error',
            title: 'Erro',
            description: 'Documento enviado inválido',
          });
          return;
        }
        if (!!error.isAxiosError && !error.response) {
          addToast({
            type: 'error',
            title: 'Erro ao anexar',
            description:
              'Houve um problema ao tentar anexar os comprovantes enviados',
          });
          return;
        }
        const { message } = error.response.data;
        addToast({
          type: 'error',
          title: 'Erro na aplicação',
          description: message,
        });
      }
    },
    [addToast, uploadSlipDocument],
  );
  return (
    <Container>
      <Content>
        <Presentation>
          <h1>Depósito Solicitado</h1>
          <p>
            O depósito foi solicitado com sucesso, você pode nos enviar o
            comprovante agora ou mais tarde! Confira os dados do seu investmento
          </p>
          <p>
            ID:
            {deposit.id}
          </p>
          <p>
            Valor:
            {deposit.value}
          </p>
        </Presentation>
        <DepositSlipForm ref={formRef} onSubmit={handleOnSubmit}>
          <FileInput label="Anexar comprovante" name="depositSlipFile" />
          <Button type="submit">Enviar</Button>
        </DepositSlipForm>
      </Content>
    </Container>
  );
};

export default AttachDocument;
