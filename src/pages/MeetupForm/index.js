import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

export default function MeetupForm() {
  function handleSubmit() {}

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="title" placeholder="Título do meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <div>
          <button type="submit">
            <MdAddCircleOutline color="#FFF" size={16} />
            Salvar meetup
          </button>
        </div>
      </Form>
    </Container>
  );
}
