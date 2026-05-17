import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div<{ hasError?: boolean }>`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;

  border: 1px solid ${({ theme, hasError }) => (hasError ? 'red' : theme.primary)};
  border-radius: 21px;
  background-color: transparent;
  padding: 0 15px;

  & input {
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 8px;
  margin-left: 10px;
`;
