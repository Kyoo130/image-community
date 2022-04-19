import React, { useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
import { Notifications } from "@material-ui/icons";
import { realtime } from "../shared/firebase";
import { useSelector } from "react-redux";

const NotiBadge = (props) => {
  const [is_read, setIsRead] = useState(true);
  const user_Id = useSelector((state) => state.user.user.uid);

  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${user_Id}`);
    notiDB.update({ read: true });
    props._onClick();
  };

  useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_Id}`);
    notiDB.on("value", (snapshot) => {
      console.log(snapshot.val());
      setIsRead(snapshot.val().read);
    });
    return () => notiDB.off();
  }, []);

  return (
    <>
      <Badge
        color="secondary"
        variant="dot"
        invisible={is_read}
        onClick={notiCheck}
      >
        <Notifications />
      </Badge>
    </>
  );
};

NotiBadge.defaultProps = {
  _onClick: () => {},
};

export default NotiBadge;
