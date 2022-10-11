import * as C from "./styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/database";
import { appFirebase } from "../../config/firebase";
import { useFirstNameContext } from "../../context/FirstName";
import { ModalValidation } from "../Validation/modalValidate";
import { Input } from "../Form/styles";
import Swal from "sweetalert2";
import Logo from "../../assets/logoHeader.svg";
import { btnLink, text } from "../../UI/variables";

export const RegisterForm = () => {
  const { firstName, setFirstName } = useFirstNameContext();
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [invalidated, setInvalidated] = useState<boolean>(false);
  const [mode, setMode] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (confirmationPassword === password) {
      setInvalidated(false);
    } else {
      setInvalidated(true);
    }
  }, [password, confirmationPassword]);

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (invalidated) {
      Swal.fire(
        'Erro ao efetuar o cadastro!',
        'Ocorreu um erro ao tentar efetuar o cadastro, tente novamente.',
        'error'
      );
    } else {
      Swal.fire({
        imageUrl: Logo,
        imageWidth: 150,
        imageHeight: 100,
        color: '#fff',
        title: '<strong>Cadastro efetuado!</strong>',
        background: `${text}`,
        confirmButtonColor: `${btnLink}`,
        html:
          `<p>Parabéns pelo seu cadastro no nosso site, <strong>${firstName}</strong>.</p>`
      });
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    appFirebase.database().ref().child("users").push(data);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <C.Container onSubmit={register}>
      <h2>Cadastro</h2>

      <Input
        style={{ border: "1px solid white" }}
        type="text"
        placeholder="Nome"
        onChange={(event: any) => setFirstName(event.target.value)}
        value={firstName}
        required
        noValidated={invalidated}
      />

      <Input
        style={{ border: "1px solid white" }}
        type="text"
        placeholder="Sobrenome"
        onChange={(event: any) => setLastName(event.target.value)}
        value={lastName}
        required
        noValidated={invalidated}
      />

      <Input
        style={{ border: "1px solid white" }}
        type="text"
        placeholder="Email"
        onChange={(event: any) => setEmail(event.target.value)}
        value={email}
        required
        noValidated={invalidated}
      />

      <C.InputPassrd
        type="password"
        placeholder="Senha"
        onChange={(event: any) => setPassword(event.target.value)}
        onFocus={() => setMode(true)}
        onBlur={() => setMode(false)}
        value={password}
        invalidated={invalidated}
        required
      />

      {mode ?
        <ModalValidation
          password={password}
          mode={mode}
        /> : ""
      }

      <C.InputPassrd
        type="password"
        placeholder="Confirme sua senha"
        onChange={(event: any) => setConfirmationPassword(event.target.value)}
        value={confirmationPassword}
        invalidated={invalidated}
        required
      />

      {invalidated ? <C.ErroPassrd>Ops, senhas não conferem. Tente novamente!</C.ErroPassrd> : ""}

      <C.Button>Cadastrar</C.Button>
    </C.Container>
  );
}