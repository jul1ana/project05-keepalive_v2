import styled from "styled-components";

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

  img {
    width: 70vw;
    padding: 1rem;

    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }
`;

export const Left = styled.div`
 padding: 1.2rem;
 display: flex;
 flex-direction: column;
 gap: 1rem;

 @media screen and (min-width: 768px) {
    padding: 5rem;
  }

 h1 {
  font-size: 2rem;
  font-weight: 350;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }

 }
 p {
    font-size: .9rem;
    font-weight: 340;

    @media screen and (min-width: 768px) {
    font-size: 1rem;
    width: 63%;
  }

  }

`;