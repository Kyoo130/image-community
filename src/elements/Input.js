import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          maxLength="1000"
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Grid>
    );
  }

  return (
    <>
      <Grid>
        {label && <Text margin="0 0 10px 0">{label}</Text>}
        {is_submit ? (
          <ElInput
            type={type}
            maxLength="100"
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            type={type}
            maxLength="100"
            placeholder={placeholder}
            onChange={_onChange}
          />
        )}
      </Grid>
    </>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #bdbdbd;
  width: 100%;
  padding: 12px 8px;
  box-sizing: border-box;

  :focus {
    outline: 1px solid #ee7850;
  }
`;

const ElInput = styled.input`
  border: 1px solid #bdbdbd;
  width: 100%;
  padding: 12px 8px;
  box-sizing: border-box;

  :focus {
    outline: 1px solid #ee7850;
  }
`;

export default Input;
