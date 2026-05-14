import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 80%;
  height: 42px;
  padding: 0 20px;
  background-color: transparent;
  align-self: center;
  color: ${({ theme }) => theme.primary};

  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 21px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
