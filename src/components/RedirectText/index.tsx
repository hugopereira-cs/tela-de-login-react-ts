import { useNavigate } from 'react-router-dom';
import { Container, LinkText } from './styles';

interface RedirectTextProps {
  text: string;
  linkText: string;
  linkTo: string;
}

export const RedirectText = ({ text, linkText, linkTo }: RedirectTextProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <span>{text} </span>
      <LinkText onClick={() => navigate(linkTo)}>{linkText}</LinkText>
    </Container>
  );
};
