import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import history from '../../services/history';

import { listMeetupsRequest } from '../../store/modules/meetup/actions';
import { Container, ButtonAddMeetup, Content, Meetup, Info } from './styles';

export default function Dashboard() {
  const meetups = useSelector(state => state.meetup.meetups);
  const dispatch = useDispatch();

  function handleDetail(meetup_id) {
    history.push(`/details/${meetup_id}`);
  }

  useEffect(() => {
<<<<<<< HEAD
    dispatch(listMeetupsRequest());
  }, [dispatch]);
=======
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
  }, []);
>>>>>>> 2f7baef1c93f74326f972a3c4b16b63ae213dc1f

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
                    <Link onClick={() => handleDetail(meetup.id)} to="#">
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
