import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 840px;
  margin: 40px auto;
  border: 0px;
`;

export const Header = styled.div`
  width: 100%;
  flex-direction: column;
  div {
    border: 0px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    button {
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
    }
  }
`;

export const Meetup = styled.li`
  border: 0px;
  background: rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 30px;
  border-radius: 4px;
  transition: background 0.2s linear;
  & + li {
    margin-top: 8px;
  }
  strong {
    font-size: 15px;
    line-height: 21px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
export const Content = styled.div`
  padding-top: 20px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  color: #c0c0c0;
  align-self: end;
  font-size: 14px;
  line-height: 20px;
  time {
    margin: 0px 25px;
  }
  a {
    border: 0px;
    padding-left: 10px;
    margin-left: 0px;
  }
`;
