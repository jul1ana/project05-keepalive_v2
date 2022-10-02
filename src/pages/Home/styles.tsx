import styled from "styled-components";
import ImgBall from "../../assets/bolaCompass.svg";

export const Header = styled.header`
  display: flex;
  padding: .5rem;
  gap: .2rem;
  justify-content: space-between;

  img {
    width: 40%;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      width: 16%;
    }
  }
`;

export const Container = styled.section`

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    max-height: 100vh;
    align-items: center;
  }

`;

export const Left = styled.div`

  @media screen and (min-width: 768px) {
    width: 30%;
    height: 60vh;
    margin-top: 2rem;
    background-image: url(${ImgBall});
    background-size: contain;
    background-repeat: no-repeat; 
    margin-bottom: 1rem;
  }

`;

export const Right = styled.div`

  text-align: center;
  padding: 1.5rem 1rem 1rem 1rem;

  @media screen and (min-width: 768px) {
    /* padding: 1rem; */
    margin-right: 2rem;
    width: 50%;
    text-align: right;

  }

  h1{
    color: #C12D18;
    font-size: 1.1rem;

    @media screen and (min-width: 320px) {
      font-size: .9rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
  h2 {
    color: #C12D18;
    font-size: .9rem;

    @media screen and (min-width: 320px) {
      font-size: .75rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .9rem;
    }
  }
  p {
    color: #222222;
    font-weight: 400;
    font-size: .85rem;

    @media screen and (min-width: 320px) {
      font-size: .7rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .8rem;
    }
  }

`;

export const Footer = styled.footer`

  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    font-size: .8rem;
    gap: 2rem;
    /* margin-top: 1rem; */
  }


`;

export const Text = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  gap: .7rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  p {
    font-size: .8rem;

    @media screen and (min-width: 320px) {
      font-size: .65rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .7rem;
    }
  }

  hr {
    border: 1px solid white;
  }


`;

export const Cont = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: .5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  p {
    font-size: .8rem;

    @media screen and (min-width: 320px) {
      font-size: .65rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .7rem;
    }
  }

`;

export const Nav = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: .9rem;

  @media screen and (min-width: 320px) {
    font-size: .7rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    font-size: .75rem;
  }


`;

export const BtnLinkOut = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: white;
  padding: 1.5rem 1rem;

  @media screen and (min-width: 768px) {
    padding: 0 1.8rem;
  }

`;

export const BtnLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: #C13216;
  background-color: white;
  padding: 1.5rem 3.9rem;

  @media screen and (min-width: 320px) {
    padding: 1.1rem 6.2rem;
  }

  @media screen and (min-width: 425px) {
    padding: 1.1rem 9.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 1.6rem 2rem;
  }
`;