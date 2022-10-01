import styled from "styled-components";

interface IInput {
  noValidated: boolean;
}

interface IIconeSelected {
  selected: boolean
}

export const Input = styled.input<IInput>`
  border: ${({ noValidated }) => noValidated ? "1px solid #E9B425" : "1px solid white"};
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  background: #26292C;
  color: white;
  border-radius: 50px;
  outline: 0;

  ::placeholder{
    color: white
  }
`;