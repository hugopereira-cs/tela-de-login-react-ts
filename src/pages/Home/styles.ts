import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const HomeText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin-top: 20px;
`;
