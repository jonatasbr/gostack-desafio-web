import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import ImageInput from './ImageInput';
import DatePicker from './DatePicker';
import { Container, Button } from './styles';

export default function MeetupForm() {
  function handleSubmit() {}

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
