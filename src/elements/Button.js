import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, is_float, margin, width, children } = props;
  const styles = {
    margin: margin,
    width: width,
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
  is_float: false,
  margin: false,
  width: "100%",
  _onClick: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #fff;
  padding: 12px 0;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
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
