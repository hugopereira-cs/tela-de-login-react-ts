import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  padding: 0 20px;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 20px;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    transition: all 0.3s ease;
  }
`;
