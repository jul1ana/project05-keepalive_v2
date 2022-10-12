import styled from "styled-components";
import ImgBack from "../../assets/MaskGroup.png";
import { backgroundLogin, titleMain } from "../../UI/variables";

export const Container = styled.section`
  background: ${backgroundLogin};
  color: white;
  display: flex;
  flex-direction: column;

  @media screen and (min-height: 279px) { 
    min-height: 900px;
    height: 170vh;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    height: 170vh;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  @media screen and (min-width: 1340px) {
    /* height: 140vh; */
  }

  img {
    width: 50vw;
    padding: 1rem;

    @media screen and (min-width: 432px) {
      width: 13rem;
    }
  
    @media screen and (min-width: 768px) {
      width: 25%;
      margin-left: 30rem;
    }
  
    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

`;

export const Section = styled.div`
 padding: 1.2rem;
 display: flex;
 flex-direction: column;
 gap: 1rem;

 @media screen and (min-width: 768px) {
    padding: .4rem 2rem 1rem 2rem;
    /* height: 150vh; */
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    padding: 2rem 4rem;
  }

  @media screen and (min-width: 1340px) {
    padding: 1rem 9rem;
    gap: 0rem;
    height: 140vh;
  }

 h1 {
  font-size: 1.5rem;
  font-weight: 350;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
 }

 p {
  font-size: .75rem;
  font-weight: 340;

  @media screen and (min-width: 320px) {
    width: 13.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: .8rem;
    width: 63%;
  }
 }

 div {
    p {
      width: 11rem;
      text-align: center;
      margin-left: 2.2rem;

      @media screen and (min-width: 768px) {
        width: 13rem;
        margin-left: 1.1rem;
      }

      @media screen and (min-width: 1024px) {
        margin-left: 3.2rem;
      }

      @media screen and (min-width: 1340px) {
        margin-top: 1rem;
      }

      a {
        color: ${titleMain};
        font-weight: 500;
      }
    }
  }
`;

export const Background = styled.div`
  @media screen and (min-width: 1024px) {
    width: 50%;
    height: 100vh;
    background-image: url(${ImgBack});
    background-size: cover;
    background-repeat: no-repeat; 
  }

  @media screen and (min-width: 1340px) {
    height: 144vh;
  }
`;