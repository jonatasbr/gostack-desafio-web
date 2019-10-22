import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import history from '../../services/history';

import { listMeetupsRequest } from '../../store/modules/meetup/actions';
import { Container, ButtonAddMeetup, Content, Meetup } from './styles';

export default function Dashboard() {
  const meetups = useSelector(state => state.meetup.meetups);
  const dispatch = useDispatch();

  function handleDetail(meetup_id) {
    history.push(`/meetup/details/${meetup_id}`);
  }

  useEffect(() => {
    dispatch(listMeetupsRequest());
  }, [dispatch]);

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
                  <aside>
                    <span>{meetup.dateFormated}</span>
                    <button type="button">
                      <MdChevronRight
                        size={24}
                        color="#fff"
                        onClick={() => handleDetail(meetup.id)}
                      />
                    </button>
                  </aside>
                </Meetup>
              ))
            : null}
        </ul>
      </Content>
    </Container>
  );
}
