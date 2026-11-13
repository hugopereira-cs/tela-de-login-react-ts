import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.surface};
  border: ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  border-radius: 16px;
  justify-content: center;
  align-items: flex-start;
  padding: 32px 28px;
  transition: all 0.25s ease;

  @media (min-width: 768px) {
    padding: 44px 40px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.25;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

export const HomeText = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.secondary};
`;
