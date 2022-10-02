import * as C from "./styles";
import Logo from "../../assets/logoHeader.svg";
import { Form } from "../../components/Form";

export const Login = () => {
  return(
    <C.Container>
      <img src={Logo} />

      <C.Left>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login na rede.</p>
        <Form />
      </C.Left>

      <div>
      </div>
    </C.Container>
  );
}