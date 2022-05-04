import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, bold, _onClick, margin, width, padding, children } = props;
  const styles = {
    bold: bold,
    margin: margin,
    width: width,
    padding: padding,
  }

  return (
    <>
      <ElButton {...styles} onClick={_onClick}>{text ? text : children}</ElButton>
    </>
  );
};

Button.defaultProps = {
  children: null,
  text: false,
  bold: false,
  margin: false,
  width: "100%",
  padding: "12px 0",
  _onClick: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #EE7850;
  color: #fff;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bold ? `font-weight: bold;` : '')}
  :hover {
    background-color: #f4511e;
  }
`;

export default Button;
