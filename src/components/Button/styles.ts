import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 44px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.brand};
  color: ${({ theme }) => theme.brandText};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.brandHover};
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.28);
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) => theme.brandActive};
    transform: translateY(1px);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.buttonDisabledBg};
    color: ${({ theme }) => theme.buttonDisabledText};
    border-color: ${({ theme }) => theme.buttonDisabledBorder};
    cursor: not-allowed;
    box-shadow: none;
    opacity: 0.75;
  }
`;
