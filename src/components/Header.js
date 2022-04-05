import React, { useEffect, useState } from "react";
import { Button, Grid, Text } from "../elements";
import { getCookie, deleteCookie } from "../shared/Cookie";

const Header = () => {
  const [is_login, setIs_login] = useState(false);

  useEffect(() => {
    let cookie = getCookie("user_id");
    console.log(cookie);

    if (cookie) {
      setIs_login(true);
    } else {
      setIs_login(false);
    }
  }, []);

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
              deleteCookie("user_id");
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
