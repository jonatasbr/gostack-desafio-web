import styled from 'styled-components';

export const Container = styled.div`
  max-width: 880px;
  margin: 30px auto;
  border: 0px;
`;

export const ButtonEdit = styled.a`
  margin: 2px 15px 2px 10px;
  padding: 2px 0px 2px 0px;
  color: #fff;
  background: #4dbaf9;
  border: 0px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
export const buttonCancel = styled.a`
  margin: 2px 0px 2px 0px;
  padding: 2px 0px 2px 0px;
  color: #fff;
  background: #d5415c;
  border: 0px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  width: 100px;
  height: 32px;
  justify-content: center;
  align-items: center;
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

  a.buttonEdit {
    border: 0px solid red;
    border-radius: 4px;
    color: #fff;
    background: #4dbaf9;
    margin: 2px 15px 2px 10px;
    padding: 2px 15px 2px 15px;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    align-content: center;
    span {
      padding-left: 8px;
    }
  }

  a.buttonCancel {
    border: 0px solid red;
    border-radius: 4px;
    color: #fff;
    background: #d5415c;
    margin: 2px 15px 2px 10px;
    padding: 2px 15px 2px 15px;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    align-content: center;
    vertical-align: center;
    span {
      padding-left: 8px;
    }
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
