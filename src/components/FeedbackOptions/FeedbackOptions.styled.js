import styled from 'styled-components';

export const ListStyle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ButtonStyle = styled.button`
  padding: 7px 25px;

  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  background-color: #06316ebd;
  color: #fcfcfc;
  border: none;
  transition: all 500ms linear;

  &:hover,
  &:focus {
    background-color: rgb(206, 217, 229);
    color: #06316ebd;
  }
`;
