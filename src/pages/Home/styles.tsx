import styled from "styled-components";
import ImgBall from "../../assets/bolaCompass.svg";

export const Header = styled.header`
  display: flex;
  padding: .5rem;
  gap: .2rem;
  justify-content: space-between;

  img {
    width: 6rem;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      width: 16%;
    }

    @media screen and (min-width: 768px) {
      width: 6rem;
      margin-top: -1rem;
      padding: 0;
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

  @media screen and (min-width: 768px) and (max-width: 1444px) {
    width: 50%;
    height: 70vh;
    margin-top: 2rem;
    background-image: url(${ImgBall});
    background-size: contain;
    background-repeat: no-repeat; 
    margin-bottom: 1rem;
  }
`;

export const Right = styled.div`

  text-align: center;
  padding: 1.5rem 1rem 2rem 1rem;

  @media screen and (min-width: 450px) {
    padding-top: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    margin-right: 2rem;
    width: 50%;
    text-align: right;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 3rem;
    width: 60%;
  }

  h1{
    color: #C12D18;
    font-size: 1.1rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
      font-size: .9rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 2rem;
    }
  }

  h2 {
    color: #C12D18;
    font-size: .9rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
      font-size: .75rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .9rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1.2rem;
    }
  }

  p {
    color: #222222;
    font-weight: 400;
    font-size: .85rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
      font-size: .7rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .8rem;
    }

    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }

`;

export const Footer = styled.footer`

  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 1444px) {
    position: absolute;
    margin-top: -2.8rem;
    display: flex;
    flex-direction: row;
    font-size: .8rem;
    gap: 2rem;
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

    @media screen and (min-width: 320px) and (max-width: 767px) {
      font-size: .65rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .7rem;
    }

    @media screen and (min-width: 1100px) {
      width: 70%;
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
    gap: 1rem;
  }

  @media screen and (min-width: 1100px) {
    width: 10%;
    margin-right: 10rem;
  }

  p {
    font-size: .8rem;

    @media screen and (min-width: 320px) and (max-width: 767px) {
      font-size: .65rem;
    }

    @media screen and (min-width: 768px) {
      font-size: .7rem;
    }
  }

  h3 {
    @media screen and (min-width: 1024px) {
      font-size: 30px;
    }
  }

`;

export const Nav = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: .9rem;

  @media screen and (min-width: 320px) and (max-width: 767px) {
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

  @media screen and (min-width: 320px) and (max-width: 767px) {
    padding: 1.1rem 6.2rem;
    border-radius: .45rem;
  }

  @media screen and (min-width: 768px) {
    border-radius: 0;
    padding: 1.6rem 2rem;
  }
`;