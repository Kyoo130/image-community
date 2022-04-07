import React from "react";
import { Grid, Image, Text } from "../elements";

const Card = (props) => {
  const {user_name, post_id, image_url} = props;

  return (
    <Grid padding="16px" is_flex bg="#fff" margin="8px 0">
      <Grid width="auto" margin="0 8px 0 0">
        <Image size="85" shape="square" image_url={image_url} />
      </Grid>
      <Grid>
        <Text>
          <b>{user_name}</b>님이 게시글 댓글을 남겼습니다.
        </Text>
      </Grid>
    </Grid>
  );
};

Card.defaultProps = {
  image_url: "",
  user_name: "",
  post_id: null,
}

export default Card;
