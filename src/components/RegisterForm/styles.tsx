import styled from "styled-components";
import { btnLogin } from "../../UI/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 350;
  }
`;

export const Input = styled.input`
  width: 70%;
  border: 1px solid white;
  padding: 13px 8px;
  box-sizing: border-box;
  background: #26292C;
  color: white;
  border-radius: 50px;
  outline: 0;

  ::placeholder{
    color: white
  }
`;

export const Button = styled.button`
  width: 70%;
  margin-top: 2.5rem;
  background: ${btnLogin};
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  border: 0;
  box-sizing: border-box;
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
  cursor: pointer;
  color: white;
  padding: .8rem;
`;