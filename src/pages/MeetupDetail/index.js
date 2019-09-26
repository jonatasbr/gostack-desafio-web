import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';

import api from '../../services/api';
import {
  Container,
  Content,
  Header,
  Buttons,
  ButtonEdit,
  ButtonCancel,
  Description,
  Info,
} from './styles';

export default function MeetupDetail({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${id}`);
      const meetupSelected = response.data;
      const parsedDate = parseISO(meetupSelected.date);
      const data = {
        ...meetupSelected,
        dateFormated: format(parsedDate, "d 'de' MMMM', às' HH'h'", {
          locale: pt,
        }),
      };

      setMeetup(data);
    }

    loadMeetup();
  }, [id]);

  return (
    <Container>
      <Content>
        <Header>
          <strong>{meetup.title}</strong>

          <Buttons>
            <ButtonEdit type="button">
              <MdEdit size={16} color="#fff" />
              Editar
            </ButtonEdit>

            <ButtonCancel type="button">
              <MdDeleteForever size={16} color="#fff" />
              Cancelar
            </ButtonCancel>
          </Buttons>
        </Header>

        <div className="image">
          <img src={meetup.image ? meetup.image.url : ''} alt="MeetUp" />
        </div>

        <Description>{meetup.description}</Description>
        <Info>
          <time>
            <MdEvent size={16} color="#999" style={{ marginRight: 5 }} />
            {meetup.dateFormated}
          </time>
          <local>
            <MdPlace size={16} color="#999" style={{ marginRight: 5 }} />
            {meetup.location}
          </local>
        </Info>
      </Content>
    </Container>
  );
}

MeetupDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
