import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
