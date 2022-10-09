import styled from "styled-components";
import iconError from "../../assets/iconError.png"
import iconCheck from "../../assets/iconCheck.png"

export const Container = styled.div<{fade:boolean}>`
  visibility: ${({ fade }) => (fade ? "visible" : "hidden")};
  color: white;
  margin-left: 1rem;

  div {
    h4 {
      font-size: .9rem;
      font-weight: 450;
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
