import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { requestDetailsMeetup } from '../../store/modules/meetup/actions';
import api from '../../services/api';
import { Container, ButtonAddMeetup, Content, Meetup, Info } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const dispatch = useDispatch();

  function handleDetail(meetup) {
    dispatch(requestDetailsMeetup(meetup));
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('events');
      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd 'de' MMMM, 'às' HH'h'",
          {
            locale: pt,
          }
        ),
      }));

      setMeetups(data);
    }
    loadMeetups();
  }, [meetups]);

  return (
    <Container>
      <div>
        <h1>Meus meetups</h1>

        <ButtonAddMeetup to="/meetup/new">
          <MdAddCircleOutline color="#FFF" size={16} />
          Novo meetup
        </ButtonAddMeetup>
      </div>
      <Content>
        <ul>
          {meetups
            ? meetups.map(meetup => (
                <Meetup key={meetup.id}>
                  <strong>{meetup.title}</strong>

                  <Info>
                    <time>{meetup.dateFormatted}</time>
                    <Link onClick={() => handleDetail(meetup)} to="#">
                      <MdChevronRight size={24} color="#fff" />
                    </Link>
                  </Info>
                </Meetup>
              ))
            : null}
        </ul>
      </Content>
    </Container>
  );
}
