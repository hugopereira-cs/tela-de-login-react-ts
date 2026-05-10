import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  padding: 0 20px;

  @media (min-width: 768px) {
    height: 60px;
  }
`;
