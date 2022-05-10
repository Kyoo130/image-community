import React, { useState, useEffect } from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  const is_edit = !!post_id;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [contents, setContents] = useState(_post ? _post.contents : "");

  useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      history.goBack();
      return;
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
  };

  const deletePost = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(postActions.deletePostFB(post_id));
    }
  };

  if (!is_login) {
    return (
      <Grid margin="100px 0" padding="16px" center>
        <Text size="32px" bold color="#EC6237">
          앗! 잠깐!
        </Text>
        <Text size="16px" color="#EC6237">
          로그인 후에만 글을 쓸 수 있어요!
        </Text>
        <Button
          margin="24px 0"
          bold
          _onClick={() => {
            history.replace("/");
          }}
        >
          돌아가기
        </Button>
      </Grid>
    );
  }

  return (
    <>
      <Grid padding="16px">
        <Text size="24px" bold color="#EC6237">
          {is_edit ? "게시글 수정" : "게시글 작성"}
        </Text>
        <Upload />
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px 0 8px 0" size="18px" bold color="#EC6237">
            미리보기
          </Text>
          <Image
            shape="rectangle"
            src={preview ? preview : "http://via.placeholder.com/400x300"}
          />
        </Grid>
      </Grid>

      <Grid padding="16px">
        <Text margin="0px 0 8px 0" size="18px" bold color="#EC6237">
          미리보기
        </Text>
        <Input
          value={contents}
          _onChange={changeContents}
          placeholder="작성할 내용을 입력해 주세요."
          multiLine
        />
      </Grid>

      <Grid is_flex padding="8px 16px">
        {is_edit ? (
          <>
            <Button margin="0 4px 0 0" bold text="수 정" _onClick={editPost} />
            <Button
              margin="0 0 0 4px"
              bold
              text="삭 제"
              _onClick={deletePost}
            />
          </>
        ) : (
          <Button bold text="게시글 작성" _onClick={addPost} />
        )}
      </Grid>
    </>
  );
};

export default PostWrite;
