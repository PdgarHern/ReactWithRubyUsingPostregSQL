import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;

`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }

  .leftImgs {
    #loginImg {
      padding-right: 10px;
      width: 50px;
      cursor: pointer;

      @media screen and (max-width: 500px) {
        width: 40px;
      }
    }
  }

`;

export const LogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }

`;

export const SecondLogoImg = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }

`;

export const LoginImg = styled.img``;
