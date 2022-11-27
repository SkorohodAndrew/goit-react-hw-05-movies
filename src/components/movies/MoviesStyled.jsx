import styled from '@emotion/styled';

export const SearchBarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px 12px;
  color: #fff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  background-color: #666262;
`;

export const FormInput = styled.input`
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 4px;

  background-color: #666262;
  color: white;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ButtonNav = styled.button`
  display: block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  padding: 10px 15px;
  border: 0;

  color: #e4c9c9;
  background-color: darkred;
  border-radius: 5px;

  font-family: inherit;
  font-size: 15px;
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

export const MoviesImage = styled.ul`
  display: grid;
  text-decoration: none;
  list-style: none;
  max-width: calc(90vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  flex-basis: calc((100% - 90px) / 5);
  grid-gap: 16px;

  margin: 0 auto;

  padding: 0;
`;

export const MoviesImageList = styled.li`
  display: grid;
  justify-content: center;

  background-color: darkred;

  border-radius: 15px;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #531919;
  }
`;
export const Text = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: bold;
  color: #e4c9c9;
`;
