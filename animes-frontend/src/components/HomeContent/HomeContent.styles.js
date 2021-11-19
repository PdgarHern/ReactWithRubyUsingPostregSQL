import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;

  .Content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }

  .Thumb {
    width: 300px;
  }

  .Text {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    line-height: 15px;
    
    h1 {
      font-size: var(--fontMed);
    }

    p {
      color: var(--medGrey)
    }

    @media screen and (max-width: 768px) {
      h1 {
        font-size: 15px;
      }

      p {
        font-size: 12px;
      }
    } 

  }

`;
