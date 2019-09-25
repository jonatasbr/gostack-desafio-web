import React from 'react';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Container, Header, Content, ListMeets, Info } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <div>
          <h1>Meus meetups</h1>

          <button type="submit">
            <MdAddCircleOutline color="#FFF" size={16} />
            Novo meetup
          </button>
        </div>
      </Header>
      <Content>
        <ul>
          <ListMeets>
            <strong>Meetup de React Native</strong>

            <Info>
              <time>24 de junho, às 20hs</time>
              <Link to="/profile">
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </Info>
          </ListMeets>

          <ListMeets>
            <strong>NodeJs Meetup</strong>

            <Info>
              <time>30 de junho, às 20hs</time>
              <Link to="/profile">
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </Info>
          </ListMeets>

          <ListMeets>
            <strong>GDG BSB Festival</strong>

            <Info>
              <time>24 de outubro, às 08hs</time>
              <Link to="/profile">
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </Info>
          </ListMeets>

          <ListMeets>
            <strong>RS/XP Meetup</strong>

            <Info>
              <time>30 de novembro, às 08hs</time>
              <Link to="/profile">
                <MdChevronRight size={24} color="#fff" />
              </Link>
            </Info>
          </ListMeets>
        </ul>
      </Content>
    </Container>
  );
}
