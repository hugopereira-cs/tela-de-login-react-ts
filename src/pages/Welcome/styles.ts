import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: ${({ theme }) => theme.surface};
  border: ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  border-radius: 16px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transition: all 0.25s ease;

  @media (min-width: 768px) {
    padding: 44px 40px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 440px;
  background-color: ${({ theme }) => theme.surface};
  border: ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  border-radius: 16px;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
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
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.span`
  font-size: 15px;
  line-height: 1.6;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 24px;

  /* Quando o Subtitle é usado no CardContainer como chamada para ação */
  ${CardContainer} & {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    line-height: 1.5;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  /* Botão principal (Cadastre-se) */
  &:first-of-type {
    background-color: ${({ theme }) => theme.brand};
    color: ${({ theme }) => theme.brandText};
    border: 1px solid transparent;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    &:hover {
      background-color: ${({ theme }) => theme.brandHover};
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.28);
    }

    &:active {
      background-color: ${({ theme }) => theme.brandActive};
      transform: translateY(1px);
    }
  }

  /* Botão secundário (Login) */
  &:last-of-type {
    background-color: ${({ theme }) => theme.surfaceHover};
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};

    &:hover {
      background-color: ${({ theme }) => theme.surfaceActive};
      border-color: ${({ theme }) => theme.borderHover};
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;

export const Registred = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.secondary};
  margin: 4px 0;
  text-align: center;
`;
