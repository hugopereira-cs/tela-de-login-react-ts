import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};

  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 21px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
