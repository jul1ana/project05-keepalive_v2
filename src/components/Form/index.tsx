import * as C from "./styles";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRegister } from "../../contexts/RegisterContext";

export const Form = () => {
  const {
    setFullName, 
    email, setEmail, 
    password, setPassword, 
  } = useRegister();
  
  const [noValidated, setNoValidated] = useState<boolean>(false);
  const navigate = useNavigate();

  const signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    firebase
      .database()
      .ref('users')
      .on("value", function (snapshot) {
        snapshot.forEach(function (item) {
          if (item.val().email === email) {
            setFullName(item.val().fullName);
          }
        });
      });

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
        setNoValidated(false);
      })
      .catch((error) => {
        if (error.code == "auth/wrong-password" || error.code == "auth/user-not-found") {
          return setNoValidated(true);
        }
        alert("Não foi possível efetuar o login");
      });
  }

  return (
    <C.Container onSubmit={signIn}>
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

      <C.Button>Continuar</C.Button>
    </C.Container>
  );
}