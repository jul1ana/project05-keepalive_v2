import styled from "styled-components";
import ImgBack from "../../assets/MaskGroup.png";
import { backgroundLogin, titleMain } from "../../UI/variables";

export const Container = styled.section`
  width: 100%;
  height: 110vh;
  display: flex;
  background: ${backgroundLogin};
  color: white;
`;

export const Left = styled.div`
  width: 50%;
  padding: 1rem 4rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-size: .8rem;
    font-weight: 350;
    width: 50%;
  }

  div {
    p {
      margin: 1rem; 
      width: 40%;
      text-align: center;
      margin-left: 5rem;

      a {
        color: ${titleMain};
        font-weight: 500;
      }
    }
  }
`;

export const Right = styled.div`
  width: 50%;
  height: 110vh;
  background-image: url(${ImgBack});
  background-size: cover;
  background-repeat: no-repeat; 
`;