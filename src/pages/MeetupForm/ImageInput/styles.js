import styled from 'styled-components';

export const Container = styled.div`
  label {
    border: 0px solid green;
    cursor: pointer;
    width: 880px;
    max-width: 880px;
    height: 250px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    vertical-align: center;
    &:hover {
      opacity: 0.7;
    }
    img {
      object-fit: cover;
      border-radius: 4px;
      border: none;
      width: 100%;
      height: 250px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      vertical-align: center;
      strong {
        color: rgba(255, 255, 255, 0.3);
        font-size: 20px;
        line-height: 23px;
        font-weight: bold;
      }
    }
    input {
      display: none;
      width: 100%;
      max-width: 880px;
      height: 80px;
      background: #555;
    }
  }
`;
