import React, { useEffect } from "react";
import { Post, CommentList, CommentWrite, NotFound } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import Permit from "../shared/Permit";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const user_info = useSelector((state) => state.user.user);
  const post_list = useSelector((store) => store.post.list);

  const post_idx = post_list.findIndex((it) => it.id === id);
  const post = post_list[post_idx];

  useEffect(() => {
    if (post) {
      return;
    }
    dispatch(postActions.getOnePostFB(id));
  }, []);

  return (
    <>
      {post ? (
        <>
          <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
          <Permit>
            <CommentWrite post_id={id} />
          </Permit>
          <CommentList post_id={id} />
        </>
      ) : (
        <>
          <NotFound />
        </>
      )}
    </>
  );
};

export default PostDetail;
