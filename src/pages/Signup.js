import React, { useState } from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck, passwordCheck } from "../shared/common";

const Signup = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd_check, setPwdCheck] = useState("");
  const [user_name, setUserName] = useState("");

  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 비밀번호, 닉네임을 모두 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (!passwordCheck(pwd)) {
      window.alert(
        "비밀번호는 8~20자 이내 영문, 숫자, 특수문자를 조합해야 합니다."
      );
      return;
    }

    if (pwd !== pwd_check) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    dispatch(userActions.signupFB(id, pwd, user_name));
  };
  return (
    <>
      <Grid padding="16px">
        <Text size="24px" bold color="#EC6237">
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
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>

        <Button
          margin="16px 0 0 0"
          bold
          text="회원가입하기"
          _onClick={signup}
        />
      </Grid>
    </>
  );
};

export default Signup;
