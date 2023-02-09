import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #21262d;
  border: 1px solid #21262d;
  border-radius: 20px;

  color: white;
  font-weight: bold;
  height: 62px;
  width: 80%;

  margin: 20px;

  &: hover {
    background-color: #fafafa40;
    cursor: pointer;
  }
`;
