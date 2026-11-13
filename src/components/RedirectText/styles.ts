import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin-top: 20px;

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.secondary};
  }
`;

export const LinkText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.brand};
  cursor: pointer;
  transition:
    color 0.2s ease,
    transform 0.1s ease;

  &:hover {
    color: ${({ theme }) => theme.brandHover};
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  &:active {
    transform: translateY(1px);
  }
`;
