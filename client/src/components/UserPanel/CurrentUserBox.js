import { Avatar, Box, Button, Typography } from "@material-ui/core";
import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const CurrentUserBox = ({currentUser}) => {
  return (
    <Box display="flex" alignItems="center"  flexDirection="row" style={{width: "100%", margin: 20,}}>
      <Avatar style={{ marginLeft: 5 , marginRight: 10}}/>
      <Typography >
        {currentUser ? currentUser.username: "None"}
      </Typography>
      <Button size="small" startIcon={<MoreHorizIcon/>}/>
    </Box>
  )
};

export default CurrentUserBox;