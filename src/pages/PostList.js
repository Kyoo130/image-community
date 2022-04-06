import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../components";
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(postActions.getPostFB());
  }, [])

  return (
    <>
      <Post />
      {post_list.map((it, idx) => {
        return <Post key={it.id} {...it} />;
      })}
    </>
  );
};

export default PostList;
