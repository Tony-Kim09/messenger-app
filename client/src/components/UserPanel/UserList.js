import React from "react";
import Grid from "@material-ui/core/Grid";

import User from "./User";
import useStyles from "../../themes/messengerStyle";

const UserList = ({users, filterUser}) => {

  const classes = useStyles();

  return (
     <Grid container direction="column" className={classes.userList}>
       {users.filter(filter => filter.username.includes(filterUser))
             .map(user => 
          <Grid item key={user.id}>
            <User username={user.username}/> 
          </Grid>
       )}
     </Grid>
  )
}

export default UserList;