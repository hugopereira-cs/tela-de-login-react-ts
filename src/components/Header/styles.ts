import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  top: 0;
  z-index: 10;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0;
    margin-bottom: 0;
  }
`;
