import styled from 'styled-components';

export const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.borderHover};
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    transform: translateY(1px);
  }
`;
