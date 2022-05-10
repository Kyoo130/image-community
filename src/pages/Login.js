import React, { useState } from "react";
import { Button, Grid, Input, Text } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요.");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <>
      <Grid padding="16px">
        <Text size="24px" bold color="#EC6237">
          로그인
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
            label="패스워드"
            placeholder="패스워드를 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            value={pwd}
            is_submit
            onSubmit={login}
          />
        </Grid>
        <Button margin="16px 0 0 0" bold text="로그인하기" _onClick={login} />
      </Grid>
    </>
  );
};

export default Login;
