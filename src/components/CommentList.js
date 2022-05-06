import React, { useEffect } from "react";
import { Grid, Image, Text, Button } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  const user_info = useSelector((state) => state.user.user);
  const { post_id } = props;


  useEffect(() => {
    if (!comment_list[post_id]) {
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  if (!comment_list[post_id] || !post_id) {
    return null;
  }

  return (
    <>
      <Grid padding="16px">
        {comment_list[post_id].map((it) => {
          return (
            <CommentItem
              key={it.id}
              post_id={post_id}
              {...it}
              is_me={it.user_id === user_info.uid}
            />
          );
        })}
      </Grid>
    </>
  );
};

CommentList.defaultProps = {
  post_id: null,
};

export default CommentList;

const CommentItem = (props) => {
  const { id, user_name, contents, insert_dt, is_me } = props;
  const dispatch = useDispatch();

  return (
    <>
      <Grid margin="0 0 16px 0" padding="0 0 16px 0" border_bt="1px solid #eee">
        <Grid is_flex>
          <Grid width="auto" margin="4px 8px 4px 0">
            <Image shape="circle" />
          </Grid>
          <Grid padding="4px 0 0 0">
            <Text margin="0" bold>
              {user_name}
            </Text>
            <Text margin="4px 0" color="#767676" size="12px">
              {insert_dt}
            </Text>
          </Grid>
        </Grid>
        <Grid padding="0 8px">
          <Text margin="4px 0">{contents}</Text>
        </Grid>
        {is_me && <Button
        _onClick={() => {
          dispatch(commentActions.removeCommentFB(props.post_id, id))
        }}
        >삭제</Button>}
      </Grid>
    </>
  );
};

CommentItem.defaultProps = {
  user_profile: "",
  user_name: "User",
  user_id: "",
  post_id: 1,
  contents: "게시글 테스트 입니다.",
  insert_dt: "2022-04-01 00:00:00",
};
