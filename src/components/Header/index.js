import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="MeetupApp" />
        </Link>
        <aside>
          <Profile>
            <nav>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </nav>
            <button>Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
