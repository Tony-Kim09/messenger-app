import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { stringToHslColor } from "../../../helper/functions";

const User = ({ username, avatarID }) => {

  const avatarBGColor = stringToHslColor(username, 50, 80);

  const useStyles = makeStyles((theme) => ({
    userCardContainer: {
      height: "100px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      boxShadow: "0.125em 0.125em 0.25em rgba(0, 0, 0, 0.05)",
      paddingLeft: theme.spacing(1),
    },
    avatarColor: {
      background: `${avatarBGColor}`,
      width: "60px",
      height: "60px"
    }
  }))

  const classes = useStyles();

  return (
    <Card className={classes.userCardContainer} elevation={0}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatarColor}
            src={avatarID ? `/users/avatar/${avatarID}` : ""}
            aria-label="users" >
            {username.substring(0, 1).toUpperCase()}
          </Avatar>
        }
        title={<b>{username}</b>}
      />
    </Card>
  )
}

export default User;