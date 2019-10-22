import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 880px;
  margin: 30px auto;
  border: 0px;
`;
export const Content = styled.div`
  flex-direction: column;
  justify-content: space-between;
  div.image {
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
  img {
    width: 100%;
    height: 300px;
  }
`;
export const Header = styled.div`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  margin: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 16px;
    color: #999;
    font-weight: normal;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonEdit = styled.button`
  border: 0;
  background: #4dbaf9;
  border-radius: 4px;
  height: 32px;
  width: 96px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.08, '#4dbaf9')};
  }
  span {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
`;
export const ButtonCancel = styled.button`
  border: 0;
  background: #d44059;
  border-radius: 4px;
  height: 32px;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.08, '#d44059')};
  }
  span {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Description = styled.div`
  margin: 10px 0px;
  padding: 10px 10px;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: center;
  time {
    font-size: 13px;
    color: #999;
    display: flex;
    align-items: center;
  }
  address {
    margin-left: 30px;
    font-size: 13px;
    color: #999;
    display: flex;
    align-items: center;
  }
`;
