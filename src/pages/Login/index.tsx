import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Container, LoginContainer, Column, Row, Spacing, Title } from './styles';
import { useForm } from 'react-hook-form';
import { defaultValues } from './types';

export default function Login() {
  const { 
    watch, 
    control, 
    formState: { errors, isValid }
  } = useForm({ defaultValues });

  const form = watch();
  console.log(form)

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
            placeholder="Email" 
            control={control}
          />
          <Spacing />
          <Input
            name="password"
            placeholder="Senha"
            control={control}
          />
          <Spacing />
          <Button title="Entrar" />
        </Column>
      </LoginContainer>
    </Container>
  )
}
