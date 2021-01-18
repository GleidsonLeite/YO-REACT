import React from 'react';
import Button from '../../../../../components/Button';
import FileInput from '../../../Components/FileInput';
import Input from '../../../Components/Input';
import TextArea from '../../../Components/TextArea';

import { Container, Content, FormContent } from './style';

const Form: React.FC = () => {
  return (
    <Container>
      <Content>
        <FormContent
          onSubmit={() => {
            console.log('submit');
          }}
        >
          <Input
            name="subject"
            label="Assunto"
            placeholder="Qual a sua dúvida?"
          />
          <TextArea
            label="Detalhes"
            placeholder="Nos fale como podemos te ajudar!"
          />
          <FileInput name="files" label="Anexar arquivos" />
          <Button type="submit">Enviar</Button>
        </FormContent>
      </Content>
    </Container>
  );
};

export default Form;
