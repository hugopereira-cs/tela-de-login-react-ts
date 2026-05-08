import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 620px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  margin: 20px;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: Center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: transparent;
  margin: 20px;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.primary};
`;

export const Subtitle = styled.span`
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.primary};

  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 22px;
  overflow: hidden;
  padding: 0 10px;

  & input {
    width: 100%;
    height: 42px;
    border-radius: 21px;
    background-color: transparent;
    border: 0;
    outline: none;
    color: ${({ theme }) => theme.primary};
  }
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  align-items: center;
  justify-content: center;
`;

export const Spacing = styled.div`
  margin: 10px 0;
`;

export const BackToLogin = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin-top: 20px;
`;
