import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "Kyoo13",
    user_profile:
      "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  },
  image_url:
    "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2022-04-05 11:27:00",
};

export default Post;
