import React from 'react';
import {Post, CommentList, CommentWrite} from "../components";

const PostDetail = () => {
  return (
    <>
      <Post />
      <CommentWrite />
      <CommentList />
    </>
  );
};

export default PostDetail;
