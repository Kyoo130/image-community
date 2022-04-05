import React from "react";
import { Button, Grid, Text } from "../elements";

const Header = () => {
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
