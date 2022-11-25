import styled from '@emotion/styled';

export const ButtonList = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
`;

export const ButtonType = styled.div`
  margin-right: 20px;
`;

export const ButtonNav = styled.button`
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  margin-left: auto;
  margin-right: auto;
  padding: 10px 20px;
  border: 0;

  color: #e4c9c9;
  background-color: darkred;
  border-radius: 5px;

  font-family: inherit;
  font-size: 22px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: #531919;
  }
`;
