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

  .error {
    color: red;
  }

`;
