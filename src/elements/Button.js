import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, bold, _onClick, is_float, margin, width, padding, children } = props;
  const styles = {
    bold: bold,
    margin: margin,
    width: width,
    padding: padding,
  }

  if (is_float) {
    return (
      <>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </>
    );
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
  is_float: false,
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
  cursor: pointer;

  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bold ? `font-weight: bold;` : '')}
  :hover {
    background-color: #f4511e;
  }
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #f9d749;
  color: #222831;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50%;
`;

export default Button;
