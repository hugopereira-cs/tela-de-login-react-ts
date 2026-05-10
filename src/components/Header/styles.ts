import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  padding: 0 20px;
`;
