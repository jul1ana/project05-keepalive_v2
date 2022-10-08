import { RegisterForm } from "../../components/RegisterForm";
import * as C from "./styles";

export const Register = () => {
  return(
    <C.Container>
      <div></div>

      <C.Left>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o cadastro na rede.</p>
        <RegisterForm />
        <div>
          <p>Se você já possui um cadastro <a href="/">clique aqui</a></p>
        </div>
      </C.Left>

      <C.Right />
      
    </C.Container>
  );
}