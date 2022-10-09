import styled from "styled-components";
import { btnLogin, msgError } from "../../UI/variables";

interface IInput {
  noValidated: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  @media screen and (min-width: 728px) {
    width: 60%;
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }

  @media screen and (min-width: 1340px) {
    margin-top: 1.75rem;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 350;
  }
`;

export const Input = styled.input<IInput>`
  border: ${({ noValidated }) => noValidated ? "1px solid #E9B425" : "1px solid white"};
  padding: 13px 8px;
  box-sizing: border-box;
  background: #26292C;
  color: white;
  border-radius: 50px;
  outline: 0;

  ::placeholder{
    color: white
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 15rem;
  }

  @media screen and (min-width: 768px) {
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 15rem;
  box-sizing: border-box;
  background: ${btnLogin};
  color: white;
  padding: 13px 8px;
  margin-top: 3rem;
  border: 0;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: 19rem;
  }

  @media screen and (min-width: 1340px) {
    margin-top: .9rem;
  }
`;

export const Erro = styled.span`
  font-size: .8rem;
  text-align: center;
  color: ${msgError};
  margin-top: 1rem;
  width: 14rem;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 13rem;
    margin-left: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 3rem;
  }

  @media screen and (min-width: 1340px) {
    padding: 0;
    margin: 0;
    width: 12rem;
    margin-left: 3.5rem;
  }
`;