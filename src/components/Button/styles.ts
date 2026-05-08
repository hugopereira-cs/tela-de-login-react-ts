import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};

  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 21px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
