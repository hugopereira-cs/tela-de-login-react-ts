import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 15px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
    opacity: 0.7;
  }
`;

export const LinkText = styled.p`
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
  
  &:hover {
    opacity: 0.8;
    border-bottom: 1px solid ${({ theme }) => theme.primary};  
    transform: translateY(-1px); // Um leve pulinho para indicar interatividade
  }

  &active {
    transform: translateY(0); // Volta para a posição original quando o link estiver ativo
  }
}
`;
