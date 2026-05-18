/**
 * @fileoverview Componente de texto com link para redirecionamento.
 */

import { useNavigate } from 'react-router-dom';
import { Container, LinkText } from './styles';

/**
 * Props do componente RedirectText.
 * @typedef {Object} RedirectTextProps
 * @property {string} text - Texto principal a exibir
 * @property {string} linkText - Texto clicável do link
 * @property {string} linkTo - Caminho/rota para redirecionamento ao clicar
 */
interface RedirectTextProps {
  text: string;
  linkText: string;
  linkTo: string;
}

/**
 * Componente que exibe um texto com um link clicável para redirecionamento.
 * Geralmente utilizado para redirecionar entre páginas como login e registro.
 * @component
 * @param {RedirectTextProps} props - Props do componente
 * @param {string} props.text - Texto principal (ex: "Não tem conta?")
 * @param {string} props.linkText - Texto do link clicável (ex: "Cadastre-se")
 * @param {string} props.linkTo - Rota para redirecionamento (ex: "/register")
 * @returns {JSX.Element} Texto com link de redirecionamento
 * @example
 * <RedirectText
 *   text="Não tem conta?"
 *   linkText="Cadastre-se"
 *   linkTo="/register"
 * />
 */
export const RedirectText = ({ text, linkText, linkTo }: RedirectTextProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <span>{text} </span>
      <LinkText onClick={() => navigate(linkTo)}>{linkText}</LinkText>
    </Container>
  );
};
