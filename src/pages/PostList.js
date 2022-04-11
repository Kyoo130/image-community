import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Post } from "../components";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/InfinityScroll";
import {Grid} from "../elements";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  const {history} = props;

  useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <Grid bg="#EFF6FF" padding="20px 0">
      <InfinityScroll
        callNext={() => {
          dispatch(postActions.getPostFB(paging.next));
        }}
        is_next={!!paging.next}
        loading={is_loading}
      >
      {post_list.map((it) => {
        if(it.user_info.user_id === user_info?.uid) {
          return (
            <Grid _onClick={() => {history.push(`/post/${it.id}`)}} key={it.id} bg="#fff">
              <Post {...it} is_me />
            </Grid>
          );
        } else {
          return (
            <Grid _onClick={() => {history.push(`/post/${it.id}`)}} key={it.id} bg="#fff">
              <Post {...it} />
            </Grid>
          )
        }
      })}
      </InfinityScroll>
    </Grid>
  );
};

export default PostList;
