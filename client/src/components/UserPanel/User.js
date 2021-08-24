import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import useStyle from "../../themes/messengerStyle"

const User = ({username}) => {

  const classes = useStyle();
  
  return (
    <Card className={classes.userListItem}>
      <CardHeader
        avatar={
          <Avatar aria-label="users">
            {username.substring(0, 1)}
          </Avatar>
        }  
        title={<b>{username}</b>}
      />
    </Card>
  )
}

export default User;