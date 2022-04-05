import React from "react";
import { Button, Grid, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = !!sessionStorage.getItem(_session_key);

  if (is_login && is_session) {
    return (
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0" size="24px" bold>
            헬로
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="내정보" />
          <Button text="알림" />
          <Button
            text="로그아웃"
            _onClick={() => {
              dispatch(userActions.logoutFB());
            }}
          />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid is_flex padding="4px 16px">
      <Grid>
        <Text margin="0" size="24px" bold>
          헬로
        </Text>
      </Grid>
      <Grid is_flex>
        <Button
          text="로그인"
          _onClick={() => {
            history.push("/login");
          }}
        />
        <Button
          text="회원가입"
          _onClick={() => {
            history.push("/signup");
          }}
        />
      </Grid>
    </Grid>
  );
};

Header.defaultProps = {};

export default Header;
