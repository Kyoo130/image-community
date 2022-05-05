import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, pre_wrap } = props;

  const styles = { bold, color, size, margin, pre_wrap };
  return <TextP {...styles}>{children}</TextP>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  pre_wrap: false,
};

const TextP = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  white-space: ${(props) => (props.pre_wrap ? "pre-wrap" : "normal")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Text;
