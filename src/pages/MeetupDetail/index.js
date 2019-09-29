import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';

import api from '../../services/api';
import { Container, Content, Header, Description, Info } from './styles';

import { cancelMeetupRequest } from '../../store/modules/meetup/actions';

export default function MeetupDetail({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});

  const dispatch = useDispatch();

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

  function handleCancelMeetup(id) {
    dispatch(cancelMeetupRequest(id));
  }

  return (
    <Container>
      <Content>
        <Header>
          <strong>{meetup.title}</strong>

          <div>
            <Link className="buttonEdit" to={`/meetup/edit/${meetup.id}`}>
              <MdEdit size={16} color="#fff" />
              <span>Editar</span>
            </Link>

            <Link
              className="buttonCancel"
              to="#"
              onClick={() => handleCancelMeetup(meetup.id)}
            >
              <MdDeleteForever size={16} color="#fff" />
              <span>Cancelar</span>
            </Link>
          </div>
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
          <address>
            <MdPlace size={16} color="#999" style={{ marginRight: 5 }} />
            {meetup.location}
          </address>
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
