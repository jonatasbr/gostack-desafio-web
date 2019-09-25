import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #191620;
  padding: 0 40px;
`;

export const Content = styled.div`
  height: 70px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    margin-left: 40px;
    img {
      border: 0px;
      width: 40px;
      height: 30px;
    }
  }
  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Profile = styled.div`
  border: 0px solid #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: text-bottom;
  nav {
    text-align: right;
    margin-right: 12px;
    padding-right: 12px;
    strong {
      display: block;
      color: #fff;
      margin-top: 8px;
    }
    a {
      display: block;
      margin-top: 6px;
      font-size: 12px;
      color: #999;
    }
  }
  button {
    margin: 5px 0 0;
    width: 60px;
    height: 36px;
    background: #d5415c;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 2px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.03, '#d5415c')};
    }
  }
`;
