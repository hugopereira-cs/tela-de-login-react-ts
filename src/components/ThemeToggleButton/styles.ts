import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;
