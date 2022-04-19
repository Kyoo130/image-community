import React from "react";
import {Button, Grid, Image, Text} from "../elements";
import {history} from "../redux/configureStore";

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
            {props.is_me && (
              <Button
                width="auto"
                margin="4px"
                padding="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "kyoo2",
    user_profile:
      "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  },
  image_url:
    "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2022-04-05 11:27:00",
  is_me: false,
};

export default Post;
