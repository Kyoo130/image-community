import React, { useEffect } from "react";
import { Grid, Image, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  const { post_id } = props;

  useEffect(() => {
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  if(!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <>
      <Grid padding="16px">
        {comment_list[post_id].map((it) => {
          return <CommentItem key={it.id} {...it} />;
        })}
      </Grid>
    </>
  );
};

CommentList.defaultProps = {
 post_id: null,
}

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;

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
