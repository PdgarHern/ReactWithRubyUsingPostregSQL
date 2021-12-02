import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
    to bottom, rgba(0, 0, 0, 0)
    41%, rgba(0, 0, 0, 0.65)
    100%
  ),
    url(${({ image }) => image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;

  .content {
    width: 100%;
    height: 600px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .configButton {
    height: 600px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 20px;
  }

`;

export const Text = styled.div`
  display: flex;
  align-items: flex-end;
  z-index: 100;
  max-width: 700px;
  margin-left: 20px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(-fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }

`;

export const Image = styled.img`
  bottom: 40px;
  z-index: 100;
  width: 100%;
  max-width: 200px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 50px;
  animation: animateThumb 0.5s;

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100px;
  }

`
