import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px); // 60px é a altura do header
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;
