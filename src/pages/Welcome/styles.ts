import styled from 'styled-components';

export const WelcomeContainer = styled.div`
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

export const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

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

export const Subtitle = styled.span`
  font-size: 26px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  width: 80%;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 22px;
  cursor: pointer;
  transition: opacity 0.1s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Registred = styled.span`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  align-items: center;
`;
