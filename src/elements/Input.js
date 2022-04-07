import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

const Input = (props) => {
  const { label, placeholder, type, value, _onChange, multiLine } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0">{label}</Text>}
        <ELTextarea value={value} rows={10} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    );
  }

  return (
    <Grid>
      {label && <Text margin="0px">{label}</Text>}
      <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
    </Grid>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해 주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ELTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
