import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";


const User = ({username}) => {

  const stringToHslColor = (str, saturation, lightness) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let h = hash % 360;
    return `hsl(${h}, ${saturation}%, ${lightness}%)`;
  }

  const avatarBGColor = stringToHslColor(username, 50, 80);

  const userCardStyle = makeStyles(() => ({
    userListItem: {
      width: "100%",
    },
    avatarColor: {
      background: `${avatarBGColor}`,
      width: "50px",
      height: "50px"
    }
}))

const classes = userCardStyle();

  return (
    <Card className={classes.userListItem} 
    style= {{height: "100px", paddingTop: "8px", borderBottom: "solid", borderWidth: "2px", 
              borderBottomColor: "rgba(230, 230, 230, 0.5)",
              borderRadius: "2px",
              marginBottom: "-15px"}} elevation={0}>
      <CardHeader
        avatar={
          <Avatar className= {classes.avatarColor} aria-label="users" >
            {username.substring(0, 1).toUpperCase()}
          </Avatar>
        }  
        title={<b>{username}</b>}
      />
    </Card>
  )
}

export default User;