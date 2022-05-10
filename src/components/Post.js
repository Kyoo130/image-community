import React from "react";
import { Grid, Image, Text } from "../elements";
import { useLocation } from "react-router-dom";
import { history } from "../redux/configureStore";

import EditIcon from "@mui/icons-material/Edit";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";

const Post = (props) => {
  const { pathname } = useLocation();
  const identify = pathname !== "/" && props.is_me;

  return (
    <>
      <Grid>
        <Grid is_flex padding="4px 0">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto" padding="4px 8px">
            <Text margin="0" color="#767676">
              {props.insert_dt}
            </Text>
            {identify && (
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
          <Text pre_wrap>{props.contents}</Text>
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
    user_name: "user",
    user_profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  image_url: "http://via.placeholder.com/400x300",
  contents: "contents",
  comment_cnt: 10,
  insert_dt: "2022-04-01 00:00:00",
  is_me: false,
};

export default Post;
