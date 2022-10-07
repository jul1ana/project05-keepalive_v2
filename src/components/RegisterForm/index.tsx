import * as C from "./styles";
import { useState } from "react";

export const RegisterForm = () => {

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  return(
    <C.Container>
      <h2>Cadastro</h2>

      <C.Input 
        type="text"
        placeholder="Nome" 
      
      />
      
      <C.Input 
        type="text" 
        placeholder="Sobrenome"
      
      />
      
      <C.Input 
        type="text" 
        placeholder="Email"
      
      />
      
      <C.Input 
        type="text" 
        placeholder="Senha"
      
      />
      
      <C.Input 
        type="text" 
        placeholder="Confirme sua senha"
      
      />

      <C.Button>Cadastrar</C.Button>
    </C.Container>
  );
}