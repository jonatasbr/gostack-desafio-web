import React from 'react';
import { MdDeleteForever, MdEdit, MdEvent, MdPlace } from 'react-icons/md';

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

export default function MeetupDetail() {
  return (
    <Container>
      <Content>
        <Header>
          <strong>Meetup Detail</strong>

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
          <img
            src="http://blogs.correiobraziliense.com.br/tecnoveste/wp-content/uploads/sites/19/2018/09/4o-edtech-meetup-brasilia-guia-de-sobrevivencia-ao-futuro-da-educacao.png"
            alt="MeetUp"
          />
        </div>

        <Description>
          O meetup de react native será um encontro para comunidade de
          desenvolverdores mobile que utilizam linguagem JavaScript. Se você é
          desenvolvedor ou deseja ser, venha participar conosco
        </Description>
        <Info>
          <time>
            <MdEvent size={16} color="#999" style={{ marginRight: 5 }} />
            24 de junho, às 20hs
          </time>
          <local>
            <MdPlace size={16} color="#999" style={{ marginRight: 5 }} />
            Brasília/DF
          </local>
        </Info>
      </Content>
    </Container>
  );
}
