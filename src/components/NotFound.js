import React from "react";
import { Button, Grid, Text } from "../elements";
import { history } from "../redux/configureStore";

const NotFound = () => {
  return (
    <Grid padding="16px">
      <Text size="24px" bold color="#EC6237">
        NotFound
      </Text>
      <Text size="16px" color="">
        URL 주소가 잘못 입력 되었거나, 삭제된 게시글 입니다.
      </Text>

      <Grid padding="16px 0">
        <Button
          margin="16px 0 0 0"
          bold
          text="돌아가기"
          _onClick={() => {
            history.push("/");
          }}
        />
      </Grid>
    </Grid>
  );
};

export default NotFound;
