import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 140px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }

`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  .info {
    display: flex;
    justify-content: flex-start;
  }

  .age {
    margin: 0;
  }

  .role {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }

    h1 {
      @media screen and (max-width: 768px) {
        font-size: var(--fontBig);
      }
    }
  }

  .button {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }

`;
