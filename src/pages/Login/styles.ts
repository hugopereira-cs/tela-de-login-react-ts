import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 16px;
  border: ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;

  @media (min-width: 768px) {
    padding: 40px 36px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 8px;
  text-align: left;
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export const Spacing = styled.div`
  height: 14px;
`;
