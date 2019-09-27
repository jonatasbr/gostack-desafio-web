import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 880px;
  margin: 30px auto;
  border: 0px;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    input {
      height: 44px;
    }
    textarea {
      resize: none;
      font: 14px 'Roboto', sans-serif;
      padding-top: 15px;
      height: 150px;
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    div {
      border: 0;
      align-self: end;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 20px;
        padding-left: 20px;
        width: 150px;
        height: 30px;
        background: #f64c75;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        transition: background 0.2s;
        justify-content: space-between;

        &:hover {
          background: ${darken(0.03, '#f64c75')};
        }
      }
    }
  }
`;
