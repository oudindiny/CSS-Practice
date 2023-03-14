import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.17);
  ${(props) =>
    props.cherry &&
    css`
      border: 2px solid #d63031;
      color: #d63031;
      background-color: #fff;
      cursor: pointer;

      &:after {
        content: "🍒";
      }

      &:hover {
        background-color: #d63031;
        color: #fff;
      }
    `}
  ${(props) =>
    props.banana &&
    css`
      border: 2px solid #fdcb6e;
      color: #fdcb6e;
      background-color: #fff;
      cursor: pointer;
      &:after {
        content: "🍌";
      }

      &:hover {
        background-color: #fdcb6e;
        color: #fff;
      }
    `}
`;

const ButtonTest = () => {
  return (
    <div>
      <Button cherry>Cherry</Button>
      <Button banana>Banana</Button>
    </div>
  );
};
export default ButtonTest;
