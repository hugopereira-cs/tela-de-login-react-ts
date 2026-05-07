import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 42px;
  color: ${({ theme }) => theme.primary};

  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 21px;
  overflow: hidden;
  padding: 0 10px;

  & input {
    width: 100%;
    height: 42px;
    border-radius: 21px;
    background-color: transparent;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.secondary};
  }

  & p {
    color: red;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 10px;
`;
