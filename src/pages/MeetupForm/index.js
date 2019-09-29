import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '../../store/modules/meetup/actions';

import history from '../../services/history';

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

export default function MeetupForm({ match }) {
  const idMeetup = Number(match.params.id);

  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetup.meetup);

  const initialData = !idMeetup ? [] : meetup;
  useEffect(() => {
    if (idMeetup && meetup) {
      if (idMeetup !== meetup.id) history.push('/');
    }
  }, [idMeetup, meetup]);

  function handleSubmit(data) {
    if (meetup) {
      handleUpdateMeetup(data);
    } else {
      handleCreateMeetup(data);
    }
  }

  function handleCreateMeetup(data) {
    dispatch(createMeetupRequest(data));
  }

  function handleUpdateMeetup(data) {
    dispatch(updateMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema} initialData={initialData}>
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

MeetupForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
