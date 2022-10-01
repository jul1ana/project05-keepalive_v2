import * as C from "./styles";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [noValidated, setNoValidated] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const navigate = useNavigate();

  const formValidation = (event: FormEvent<HTMLFormElement> | any) => {
    event.preventDefault();

    let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    if (regEmail.test(user) && password.length > 6) {
      navigate("/home");
      setNoValidated(false)
    } else return setNoValidated(true)
  }

  return(

    <div>
      <h2>Login</h2>

      {/* <C.Input 

      
      /> */}

    </div>

  );

}