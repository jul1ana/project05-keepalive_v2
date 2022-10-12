import * as C from "./styles";
import Logo from "../../assets/LogoCompass.svg";
import Location from "../../components/Location";
import { useState, useEffect } from "react";
import { useRegister } from "../../contexts/RegisterContext";
import { useNavigate } from "react-router-dom";
import { Time } from "../../components/Time";
import { auth } from "../../config/firebase";

export const Home = () => {
  const { fullName } = useRegister();
  const [cont, setCont] = useState(60);
  const navigate = useNavigate();

  const logOut = () => {
    auth.signOut();
    navigate("/");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCont((cont) => cont - 1);
      if (cont === 0) {
        navigate("/");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [cont]);

  return (
    <>
      <C.Header>
        <img src={Logo} />
        <div> <Time /> </div>
        <Location />
      </C.Header>

      <C.Container>
        <C.Left />

        <C.Right>
          <h2>Our mission is</h2>
          <p>Nossa missão é</p>
          <h1>to transform the world</h1>
          <p>transformar o mundo</p>
          <h1>building digital experiences</h1>
          <p>construindo experiências digitais</p>
          <h1>that enable our client's growth</h1>
          <p>que permitam o crescimento dos nossos clientes</p>
        </C.Right>
      </C.Container>

      <C.Footer>
        <C.Text>
          <h4>Seja bem vindo(a), <br />{fullName.split(" ").slice(0, 1)}!</h4>
          <p>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</p>
          <hr />
        </C.Text>
        <C.Cont>
          <p>Application refresh in</p>
          <div>
            <h3>{cont}</h3>
            <p>seconds</p>
          </div>
        </C.Cont>
        <C.Nav>
          <C.BtnLink href="https://compass.uol/en/home/">Continuar Navegando</C.BtnLink>
          <C.BtnLinkOut onClick={logOut}>Logout</C.BtnLinkOut>
        </C.Nav>
      </C.Footer>
    </>
  );
}