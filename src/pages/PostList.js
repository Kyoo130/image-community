import React, {useEffect} from "react";
import { Post } from "../components";
import { Grid } from "../elements";
import InfinityScroll from "../shared/InfinityScroll";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);

  const { history } = props;

  useEffect(() => {
    if (post_list.length < 2) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <>
      <Grid padding="16px 8px">
        <InfinityScroll
          callNext={() => {
            dispatch(postActions.getPostFB(paging.next));
          }}
          is_next={!!paging.next}
          loading={is_loading}
        >
          {post_list.map((p) => {
            if (p.user_info.user_id === user_info?.uid) {
              return (
                <Grid
                  bg="#ffffff"
                  margin="8px 0px"
                  key={p.id}
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                >
                  <Post key={p.id} {...p} is_me />
                </Grid>
              );
            } else {
              return (
                <Grid
                  key={p.id}
                  bg="#ffffff"
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                >
                  <Post {...p} />
                </Grid>
              );
            }
          })}
        </InfinityScroll>
      </Grid>
    </>
  );
};

export default PostList;
