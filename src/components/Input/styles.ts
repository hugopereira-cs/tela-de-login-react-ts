import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div<{ hasError?: boolean }>`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.inputBg};

  border: 1px solid ${({ theme, hasError }) => (hasError ? theme.error : theme.inputBorder)};
  border-radius: 10px;
  padding: 0 14px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover:not(:focus-within) {
    border-color: ${({ theme, hasError }) => (hasError ? theme.error : theme.borderHover)};
  }

  &:focus-within {
    border-color: ${({ theme, hasError }) => (hasError ? theme.error : theme.inputFocusBorder)};
    box-shadow: 0 0 0 3px ${({ theme, hasError }) => (hasError ? theme.errorBg : theme.focusRing)};
  }

  & input {
    flex: 1;
    height: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 500;

    &::placeholder {
      color: ${({ theme }) => theme.muted};
      font-weight: 400;
    }
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.muted};
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.surfaceHover};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.error};
  font-size: 12.5px;
  font-weight: 500;
  margin-top: 6px;
  margin-left: 4px;
  display: flex;
  align-items: center;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
