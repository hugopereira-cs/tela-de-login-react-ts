import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 0;
  }
`;

export const WelcomeContainer = styled.div`
  width: full;
  max-width: 600px;
  display: flex;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CardContainer = styled.div`
  width: full;
  max-width: 600px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
