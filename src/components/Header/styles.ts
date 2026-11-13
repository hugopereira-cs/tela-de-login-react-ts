import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 64px;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.title === 'dark' ? 'rgba(9, 13, 22, 0.85)' : 'rgba(255, 255, 255, 0.85)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 50;
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  & svg {
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const LogoutButton = styled.button`
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.borderHover};
  }

  &:active {
    transform: translateY(1px);
  }
`;
