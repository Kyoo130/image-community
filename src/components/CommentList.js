import React from "react";
import { Grid, Image, Text } from "../elements";

const CommentList = () => {
  return (
    <>
      <Grid padding="16px">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } = props;

  return (
      <Grid is_flex>
        <Grid is_flex width="auto">
          <Image shape="circle" />
          <Text bold>{user_name}</Text>
        </Grid>
        <Grid is_flex margin="0 4px">
          <Text margin="0">{contents}</Text>
          <Text margin="0">{insert_dt}</Text>
        </Grid>
      </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "Kyoo1",
  user_id: "",
  post_id: 1,
  contents: "귀여운 고양이 네요!",
  insert_dt: "2022-04-06 13:36:00",
};
