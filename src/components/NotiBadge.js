import React, { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { deepOrange } from "@mui/material/colors";

import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
  const [is_read, setIsRead] = useState(true);
  const user_id = useSelector((state) => state.user.user.uid);

  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${user_id}`);
    notiDB.update({ read: true });
    props._onClick();
  };

  useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`);

    notiDB.on("value", (snapshot) => {
      console.log(snapshot.val());
      setIsRead(snapshot.val().read);
    });
    return () => notiDB.off();
  }, []);

  return (
    <>
      <Badge
        sx={{ color: deepOrange[400] }}
        color="error"
        variant="dot"
        invisible={is_read}
        onClick={notiCheck}
      >
        <NotificationsIcon />
      </Badge>
    </>
  );
};

NotiBadge.defaultProps = {
  _onClick: () => {},
};

export default NotiBadge;
