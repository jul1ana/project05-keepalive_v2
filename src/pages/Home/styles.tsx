import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: .5rem;
  gap: .2rem;
  justify-content: space-between;

  img {
    width: 40%;
    margin-bottom: 2rem;
  }
`;

export const Container = styled.section`

`;

export const Left = styled.div`

`;

export const Right = styled.div`

  text-align: center;
  padding: 1.5rem 1rem 1rem 1rem;

  h1{
    color: #C12D18;
    font-size: 1.1rem;
  }
  h2 {
    color: #C12D18;
    font-size: .9rem;
  }
  p {
    color: #222222;
    font-weight: 400;
    font-size: .85rem;
  }

`;

export const Footer = styled.footer`

  background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`;

export const Text = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  gap: .7rem;

  p {
    font-size: .8rem;
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

  p {
    font-size: .8rem;
  }

`;

export const Nav = styled.div`

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: .9rem;


`;

export const BtnLinkOut = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: white;
  padding: 1.5rem 1rem;
`;

export const BtnLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: #C13216;
  background-color: white;
  padding: 1.5rem 3.9rem;
`;