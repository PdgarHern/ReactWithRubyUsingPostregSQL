import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding: 20px;
  color: var(--darkGrey);

  label {
    font-weight: bold;
  }

  input {
    width: 320px;
    height: 30px;
    border: 1px solid var(--darkGrey);
    border-radius: 20px;
    margin: 10px 0;
    padding: 10px;
  }

  #image {
    border: 0;
  }

  #posterImg {
    max-width: 300px;
    border-radius: 10px;
  }

  #thumbImg {
    max-width: 150px;
    border-radius: 10px;
  }

  #img {
    max-width: 150px;
    border-radius: 10px;
  }

  .error {
    color: red;
  }

`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;

  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background: var(--medGrey); */
    border-radius: 20px;
    margin: 0;
    flex: 1;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }

    .checkBox {
      display: flex;
      align-items: center;
      input {
        width: 60px;
      }
    }

    h1 {
      color: var(--darkGrey);
    }

    strong {
      font-size: var(--fontBig);
    }

    @media screen and (max-width: 768px) {
      display: flex;

      .column {
        margin: 20px 0;
      }
    }
  }

  .infoColumn {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      margin: 0;
      flex: 1;

      :first-child {
        margin-left: 0;
      }

      :last-child {
        margin-right: 0;
      }

      strong {
        font-size: var(--fontBig);
        padding-bottom: 20px;

        @media screen and (max-width: 1000px) {
          font-size: var(--fontMed);
        }

      }

      @media screen and (max-width: 768px) {
        padding-bottom: 20px;
      }

  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

  }

`;
