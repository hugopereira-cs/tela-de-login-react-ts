import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Container, LoginContainer, Column, Row, Spacing, Title } from './styles';
import { useForm } from 'react-hook-form';
import { defaultValues, FormLoginProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "No mínimo 6 caracteres").required("Campo obrigatório"),
})
.required();

export default function Login() {
  const { 
    control, 
    formState: { errors, isValid }
  } = useForm<FormLoginProps>({ 
      defaultValues, 
      resolver: yupResolver(schema), 
      mode: "onBlur",
      reValidateMode: "onChange"
    });

    console.log(isValid);

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
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          <Button title={isValid ? "Entrar" : "🚫"} disabled={!isValid} />
        </Column>
      </LoginContainer>
    </Container>
  )
}
