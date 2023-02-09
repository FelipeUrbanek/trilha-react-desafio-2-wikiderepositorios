import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 8px;

  height: 62px;
  width: 80%;

  margin: 20px;

  input {
    background: transparent;
    border: 0;
    width: 90%;
    height: 62px;
    padding: 0 20px;
    color: #ffffff;
    font-size: 20px;
  }
  input:focus {
    border-radius: 8px;
    outline: none;
  }
`;
