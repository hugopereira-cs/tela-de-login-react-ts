import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 420px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  margin: 20px;
  padding: 20px;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.primary};
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Spacing = styled.div`
  margin: 10px 0;
`;
