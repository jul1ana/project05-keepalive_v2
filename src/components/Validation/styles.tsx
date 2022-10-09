import styled from "styled-components";
import iconError from "../../assets/iconError.png"
import iconCheck from "../../assets/iconCheck.png"

export const Container = styled.div<{fade:boolean}>`
  position: absolute;
  visibility: ${({ fade }) => (fade ? "visible" : "hidden")};
  background-color: white;
  color: black;
  margin-left: 5rem;

  div {
    h4 {
      font-size: 1rem;
    }
  }
`;

export const Span = styled.span<{status: boolean}>`
  color: ${({ status }) => (status ? "green" : "red")};
  display: flex;
  font-size: 0.8rem;
`;

export const Icon = styled.i<{status: boolean}>`
  width: 30px;
  height: 30px;
  background-image: url(${({ status }) => (status ? iconCheck : iconError)});
  background-size: cover;
`;
