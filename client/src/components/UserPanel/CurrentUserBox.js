import { Avatar, Box, Typography } from "@material-ui/core";
import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from '../../themes/messengerStyle'
import AccountMenu from "../AccountMenu";

const CurrentUserBox = ({currentUser, setUser}) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" flexDirection="row" style={{width: "100%", margin: 20,}}>
      <Avatar className={classes.currentUserAvatarColor} 
          style={{width:"60px", height:"60px", marginLeft: 5 , marginRight: 24}}/>
      <Typography style={{marginRight:6}} >
        <b>{currentUser ? currentUser.username: "None"}</b>
      </Typography>
      <AccountMenu size="small" startIcon={<MoreHorizIcon/>} setUser={setUser}/>
    </Box>
  )
};

export default CurrentUserBox;