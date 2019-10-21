import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';

import history from '../../services/history';
import { Container, Content, Header, Description, Info } from './styles';

import { cancelMeetupRequest } from '../../store/modules/meetup/actions';

export default function MeetupDetail({ match }) {
  const { meetup_id } = match.params;

  const dispatch = useDispatch();

  const meetup = useSelector(state =>
    state.meetup.meetups.find(meet => String(meet.id) === meetup_id)
  );

  function handleEditMeetup(id) {
    history.push(`/meetup/edit/${id}`);
  }

  function handleCancelMeetup(id) {
    dispatch(cancelMeetupRequest(id));
  }

  return (
    <Container>
      <Content>
        <Header>
          <strong>{meetup.title}</strong>

          {meetup && meetup.past ? (
            <span>
              Este meetup já aconteceu, não é possível editar e cancelar
            </span>
          ) : (
            <div>
              <Link
                className="buttonEdit"
                to="#"
                onClick={() => handleEditMeetup(meetup.id)}
              >
                <MdEdit size={16} color="#fff" />
                <span>Editar</span>
              </Link>

              <Link
                className="buttonCancel"
                to="#"
                onClick={() => {
                  if (
                    window.confirm(
                      'Seu meetup será excluído! Deseja mesmo cancelar?'
                    )
                  ) {
                    handleCancelMeetup(meetup.id);
                  }
                }}
              >
                <MdDeleteForever size={16} color="#fff" />
                <span>Cancelar</span>
              </Link>
            </div>
          )}
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
      meetup_id: PropTypes.string,
    }),
  }).isRequired,
};
