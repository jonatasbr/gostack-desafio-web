import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 880px;
  margin: 30px auto;
  border: 0px;
  div {
    border: 0px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }
`;
export const ButtonAddMeetup = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  padding-right: 20px;
  padding-left: 20px;
  width: 150px;
  height: 30px;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  background: #f64c75;
  transition: background 0.2s;
  justify-content: space-between;

  &:hover {
    background: ${darken(0.03, '#f64c75')};
  }
`;

export const Meetup = styled.li`
  border: 0px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  transition: background 0.2s linear;
  max-height: 50px;
  padding: 10px 5px 10px 15px;
  margin: 10px 0px 10px 0px;
  aside {
    display: flex;
    align-items: center;
    span {
      color: #c0c0c0;
      font-size: 14px;
      font-weight: normal;
      margin: 0 15px;
    }
    button {
      border: 0;
      background: none;
      margin-top: 5px;
      color: #c0c0c0;
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  flex-direction: column;
`;
