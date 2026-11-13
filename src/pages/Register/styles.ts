import styled from 'styled-components';

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 820px;
  background-color: ${({ theme }) => theme.surface};
  border-radius: 16px;
  border: ${({ theme }) => theme.cardBorder};
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;
  transition: all 0.25s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 44px 40px;
    gap: 48px;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.25;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.primary};

  @media (min-width: 768px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.span`
  font-size: 15px;
  line-height: 1.6;
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.inputBg};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 10px;
  padding: 0 14px;

  & input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const Spacing = styled.div`
  height: 14px;
`;
