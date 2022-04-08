import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../components";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <>
      <InfinityScroll
        callNext={() => {
          dispatch(postActions.getPostFB(paging.next));
        }}
        is_next={!!paging.next}
        loading={is_loading}
      >
      {post_list.map((it) => {
        if(it.user_info.user_id === user_info?.uid) {
          return <Post key={it.id} {...it} is_me />;
        } else {
          return <Post key={it.id} {...it} />
        }
      })}
      </InfinityScroll>
    </>
  );
};

export default PostList;
