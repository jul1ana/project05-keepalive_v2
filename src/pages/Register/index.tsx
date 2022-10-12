import * as C from "./styles";
import Logo from "../../assets/logoHeader.svg";
import { RegisterForm } from "../../components/RegisterForm";

export const Register = () => {
  return (
    <C.Container>
      <img src={Logo} />

      <C.Section>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o cadastro na rede.</p>
        <RegisterForm />
        <div>
          <p>Se você já possui um cadastro <a href="/">clique aqui</a></p>
        </div>
      </C.Section>

      <C.Background />
    </C.Container>
  );
}