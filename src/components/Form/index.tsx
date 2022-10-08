import * as C from "./styles";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [noValidated, setNoValidated] = useState<boolean>(false);
  const navigate = useNavigate();

  const formValidation = (event: FormEvent<HTMLFormElement> | any) => {
    event.preventDefault();

    let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    if (regEmail.test(email) && password.length > 6) {
      navigate("/home");
      setNoValidated(false)
    } else return setNoValidated(true)
  }

  return (
    <C.Container>
      <h2>Login</h2>

      <div style={{ position: "relative" }}>
        <C.Input
          onChange={(event: any) => setEmail(event.target.value)}
          value={email}
          type="text"
          placeholder="Email"
          noValidated={noValidated}
          required
        />
        <C.Icon icon={true} transition={email} />
      </div>

      <div style={{ position: "relative" }}>
        <C.Input
          onChange={(event: any) => setPassword(event.target.value)}
          value={password}
          type="password"
          placeholder="Senha"
          noValidated={noValidated}
          required
        />
        <C.Icon icon={false} transition={password} />
      </div>

      {noValidated ? <C.Erro>Ops, usuário ou senha inválidos. Tente novamente!</C.Erro> : ""}

      <C.Button onClick={formValidation}>Continuar</C.Button>
    </C.Container>
  );
}