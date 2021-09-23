import { Avatar, Box, Button, Typography } from "@material-ui/core";
import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from '../../themes/messengerStyle'

const CurrentUserBox = ({currentUser}) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center"  flexDirection="row" style={{width: "100%", margin: 20,}}>
      <Avatar className={classes.currentUserAvatarColor} 
          style={{width:"60px", height:"60px", marginLeft: 5 , marginRight: 10}}/>
      <Typography >
        <b>{currentUser ? currentUser.username: "None"}</b>
      </Typography>
      <Button size="small" startIcon={<MoreHorizIcon/>}/>
    </Box>
  )
};

export default CurrentUserBox;