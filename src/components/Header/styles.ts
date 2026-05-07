import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 25px;
  position: fixed;
`;
