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
      font-size: 6rem;
    }
    span {
      font-weight: 360;
      margin-top: -1.5rem;
      font-size: .8rem;
    }
  }
`;