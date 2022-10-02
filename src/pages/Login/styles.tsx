import styled from "styled-components";
import ImgBack from "../../assets/MaskGroup.png";

export const Container = styled.div`
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  height: 100vh;
  /* width: 100vw; */
  color: white;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  img {
    width: 50vw;
    padding: 1rem;

    @media screen and (min-width: 768px) {
      width: 25%;
      margin-left: 30rem;
    }

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }
`;

export const Left = styled.div`
 padding: 1.2rem;
 display: flex;
 flex-direction: column;
 gap: 1rem;

 @media screen and (min-width: 768px) {
    padding: .4rem 2rem 1rem 2rem;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
    padding: 2rem 4rem;
  }

  @media screen and (min-width: 1340px) {
    width: 50%;
    padding: 2rem 9rem;
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

    @media screen and (min-width: 768px) {
    font-size: .8rem;
    width: 63%;
  }
  }
`;

export const Right = styled.div`
  @media screen and (min-width: 1024px) {
    width: 50%;
    height: 100vh;
    background-image: url(${ImgBack});
    background-size: cover;
    background-repeat: no-repeat; 
  }
`;