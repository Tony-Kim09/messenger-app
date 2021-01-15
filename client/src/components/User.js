import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from "@material-ui/core/Typography";

const User = ({username}) => {

  return (
    <Card>
      <CardContent>
        <Typography>{username}</Typography>
      </CardContent>
    </Card>
  )
}

export default User;