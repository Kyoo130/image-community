import React from "react";
import { Button, Grid, Input, Text } from "../elements";

const Login = () => {
  return (
    <>
      <Grid padding="16px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={() => {
              console.log("아이디 입력완료!");
            }}
          />
        </Grid>
        <Grid padding="16px 0">
          <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요."
            _onChange={() => {
              console.log("패스워드 입력완료!");
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 버튼 클릭!");
          }}
        />
      </Grid>
    </>
  );
};

export default Login;
