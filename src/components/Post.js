import React from "react";
import { Grid, Image, Text } from "../elements";
import {useParams} from "react-router-dom";
import { history } from "../redux/configureStore";

import EditIcon from "@mui/icons-material/Edit";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";

const Post = (props) => {
  const params = useParams();
  console.log("params", params)

  return (
    <>
      <Grid>
        <Grid is_flex padding="4px 0">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto" padding="4px 8px">
            <Text margin="0" color="#767676">{props.insert_dt}</Text>
            {props.is_me && (
              <>
                <IconButton
                  aria-label="Example"
                  sx={{ color: deepOrange[400] }}
                  onClick={() => {
                    history.push(`/write/${props.id}`);
                  }}
                >
                  <EditIcon />
                </IconButton>
              </>
            )}
          </Grid>
        </Grid>

        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>

        <Grid padding="4px 8px">
          <Text>{props.contents}</Text>
        </Grid>

        <Grid padding="0 8px 16px 8px" border_bt="1px solid #eee">
          <Text margin="0" bold color="#767676">
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "kyoo2",
    user_profile:
      "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  },
  image_url:
    "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2022-04-05 11:27:00",
  is_me: false,
};

export default Post;
