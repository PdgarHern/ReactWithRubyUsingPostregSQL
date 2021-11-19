import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1 {
      font-size: var(--fontSuperBig);
      color: var(--darkGrey);
    }

    p {
      font-size: var(--fontBig);
      color: var(--medGrey);
    }

`;
