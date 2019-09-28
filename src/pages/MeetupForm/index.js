import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import ImageInput from './ImageInput';
import DatePicker from './DatePicker';
import { Container, Button } from './styles';

const msgRequiredValidation = 'Campo obrigatório';
const schema = Yup.object().shape({
  file_id: Yup.number().required(msgRequiredValidation),
  title: Yup.string().required(msgRequiredValidation),
  description: Yup.string().required(msgRequiredValidation),
  date: Yup.date().required(msgRequiredValidation),
  location: Yup.string().required(msgRequiredValidation),
});

export default function MeetupForm() {
  function handleSubmit() {
    console.tron.log('teste');
    console.tron.log(schema);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <ImageInput name="file_id" />
        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <div className="divActionsButton">
          <Button type="submit">
            <MdAddCircleOutline color="#FFF" size={16} />
            Salvar meetup
          </Button>
        </div>
      </Form>
    </Container>
  );
}
