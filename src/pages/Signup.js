import React, { useState } from "react";
import { Button, Grid, Input, Text } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [user_Name, setUserName] = useState("");

  const signup = () => {
    if (id === "" || pwd === "" || user_Name === "") {
      return;
    }
    if (pwd !== pwdCheck) {
      return;
    }
    dispatch(userActions.signupFB(id, pwd, user_Name));
  };

  return (
    <>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>
        <Grid padding="16px 0">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>
        <Button text="회원가입하기" _onClick={signup} />
      </Grid>
    </>
  );
};

Signup.defaultProps = {};

export default Signup;
