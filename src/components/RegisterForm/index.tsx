import * as C from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/database";
import { appFirebase } from "../../config/firebase";
import { useFirstNameContext } from "../context/FirtsName/FirstNameContext";

export const RegisterForm = () => {

  const {firstName, setFirstName} = useFirstNameContext();
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const navigate = useNavigate();

  const register = () => {
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
      alert("Cadastro realizado!");
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <C.Container>
      <h2>Cadastro</h2>

      <C.Input
        type="text"
        placeholder="Nome"
        onChange={(event: any) => setFirstName(event.target.value)}
        value={firstName}
        required
      />

      <C.Input
        type="text"
        placeholder="Sobrenome"
        onChange={(event: any) => setLastName(event.target.value)}
        value={lastName}
        required
      />

      <C.Input
        type="text"
        placeholder="Email"
        onChange={(event: any) => setEmail(event.target.value)}
        value={email}
        required
      />

      <C.Input
        type="text"
        placeholder="Senha"
        onChange={(event: any) => setPassword(event.target.value)}
        value={password}
        required
      />

      <C.Input
        type="text"
        placeholder="Confirme sua senha"
        onChange={(event: any) => setConfirmationPassword(event.target.value)}
        value={confirmationPassword}
        required
      />

      <C.Button onClick={register}>Cadastrar</C.Button>
    </C.Container>
  );
}