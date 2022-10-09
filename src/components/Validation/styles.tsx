import styled from "styled-components";
import iconError from "../../assets/iconError.png"
import iconCheck from "../../assets/iconCheck.png"
import { backgroundLogin } from "../../UI/variables";

export const Container = styled.div<{fade:boolean}>`
  position: absolute;
  visibility: ${({ fade }) => (fade ? "visible" : "hidden")};
  color: white;
  background: #26292C;;
  margin-top: 16.95rem;
  margin-left: 1.5rem;
  padding: .5rem;
  border: 1px solid white;
  border-top: 0;
  border-radius: 2px;

  div {
    h4 {
      font-size: .9rem;
      font-weight: 500;
      margin-bottom: .2rem;
    }
  }
`;

export const Span = styled.span<{status: boolean}>`
  color: ${({ status }) => (status ? "green" : "red")};
  display: flex;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: .2rem;
`;

export const Icon = styled.i<{status: boolean}>`
  width: .8rem;
  height: .8rem;
  background-image: url(${({ status }) => (status ? iconCheck : iconError)});
  background-size: cover;
`;
