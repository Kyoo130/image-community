import React, { useRef } from "react";

import { Button } from "../elements";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators as imageActions} from "../redux/modules/image";

const Upload = () => {
  const dispatch = useDispatch()
  const is_uploading = useSelector(state => state.image.uploading);
  const fileInput = useRef();

  const selectFile = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const uploadFB = () => {
    let image = fileInput.current.files[0];
    dispatch(imageActions.uploadImageFB(image));

  };

  return (
    <>
      <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading} />
      <Button _onClick={uploadFB}>업로드하기</Button>
    </>
  );
};

export default Upload;
