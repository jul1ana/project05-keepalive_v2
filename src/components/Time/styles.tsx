import styled from "styled-components";

export const TimeDay = styled.div`

  @media screen and (min-width: 280px) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    text-align: center;
    display: flex;
    flex-direction: column;

    p {
      font-weight: 700;
      font-size: 4rem;
    }
    span {
      font-weight: 360;
      margin-top: -1.2rem;
      font-size: .5rem;
    }
  }

  @media screen and (min-width: 1100px) {

    p {
      font-weight: 700;
      font-size: 4.75rem;
    }
    span {
      font-weight: 360;
      margin-top: -1.2rem;
      font-size: .5rem;
    }
  }
`;