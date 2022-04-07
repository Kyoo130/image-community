import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../components";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <>
      {post_list.map((it, idx) => {
        if(it.user_info.user_id === user_info?.uid) {
          return <Post key={it.id} {...it} is_me />;
        } else {
          return <Post key={it.id} {...it} />
        }
      })}
    </>
  );
};

export default PostList;
