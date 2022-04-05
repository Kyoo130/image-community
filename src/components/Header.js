import React from "react";
import { Button, Grid, Text } from "../elements";

import {useDispatch, useSelector} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  if (is_login) {
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
              dispatch(userActions.logOut({}));
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
        <Button text="로그인" />
        <Button text="회원가입" />
      </Grid>
    </Grid>
  );
};

Header.defaultProps = {};

export default Header;
