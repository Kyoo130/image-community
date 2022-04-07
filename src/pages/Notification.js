import React from "react";
import { Grid, Image, Text } from "../elements";
import { Card } from "../components";

const Notification = (props) => {
  let noti = [
    { user_name: "kyoo1", post_id: "kyoo1", image_url: "" },
    { user_name: "kyoo2", post_id: "kyoo2", image_url: "" },
    { user_name: "kyoo3", post_id: "kyoo3", image_url: "" },
    { user_name: "ddddd", post_id: "post4", image_url: "" },
    { user_name: "eeeee", post_id: "post5", image_url: "" },
  ];

  return (
    <>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((n) => {
          return <Card key={n.post_id} {...n} />;
        })}
      </Grid>
    </>
  );
};

export default Notification;
